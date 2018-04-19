# javelin-timesync

Simple time syncing algorithm implementation in Javelin in ClojureScript.

https://github.com/hoplon/javelin

## Installation

[![Clojars Project](https://img.shields.io/clojars/v/thedavidmeister/javelin-timesync.svg)](https://clojars.org/thedavidmeister/javelin-timesync)

[![CircleCI](https://circleci.com/gh/thedavidmeister/javelin-timesync.svg?style=svg)](https://circleci.com/gh/thedavidmeister/javelin-timesync)

## Github pages

Checkout a basic example that hits Ably (see below) to calculate an offset:

https://thedavidmeister.github.io/javelin-timesync/

Layout generated with Hoplon elem lib:

https://github.com/thedavidmeister/hoplon-elem-lib

## Motivation

Getting reliable times in the browser can be a real pain. Users can set their
system time to anything they want and there's no tools exposed to JavaScript, or
ClojureScript by extension, to respond to this.

(S)NTP works over UDP, whereas browsers typically only offer TCP, making it
impossible to connect directly to real NTP servers (e.g. `time.google.com`).

To be useful in the browser, we consider an algorithm reasonable only if the
inaccuracy of the offset quickly converges to the limits of human perception.

This means we need to reliably reach sub 100ms inaccuracies within 5-10 seconds.

https://stackoverflow.com/questions/536300/what-is-the-shortest-perceivable-application-response-delay

Even if we could connect to NTP servers over TCP, the full NTP algorithm is
complex and converges far too slow for our needs. The SNTP algorithm is much
faster but is perceptibly inaccurate, even worse, it assumes constant latency
between the client and server, which is broken by TCP retransmissions.

This whitepaper explains well why (S)NTP calculations cannot be applied to TCP
without modification:

http://www.mine-control.com/zack/timesync/timesync.html

> Extremely robust but slow-to-converge synchronization techniques such as NTP
> have been proposed and developed by Mills, et al. Simpler alternatives are
> also in use such as SNTP [MILLS96]. Both of the protocols have deployment
> problems for computer games such as the fact that they are both data-gram
> based (UDP) as well as are either complex (NTP) or too-inaccurate (SNTP). This
> paper proposes an extremely simple alternative ... suitable for many network
> games and can be used on top of a stream-oriented protocol such as TCP.

> The SNTP technique is not viable when accuracy is critical and latency is
> variable as is the case on the world-wide Internet. Algorithms to measure,
> quantify, and correct for the error induced by variable latency were
> introduced by David Mills at University of Delaware. Mills presents an
> extremely comprehensive treatment of the subject and proposes a solution which
> became the Network Time Protocol (NTP). (specified in RFC-1305) [MILLS92] This
> protocol is used extensively throughout the Internet. Unfortunately, NTP is
> very complicated and, more importantly, slow to converge on the accurate time
> delta. This makes NTP less than ideal for network game play where the player
> expects a game to start immediately and is unwilling to allow for
> synchronization time.

> The reason that SNTP and NTP use datagram protocols is simple. Connection
> latency is measured, and therefore extracted from the time request, by
> assuming that the transmit and receive times are symmetric and dividing the
> measured latency by two. In a stream-based protocol such as TCP, the
> underlying protocol may retransmit a lost or unordered packet causing
> anomalous and asymmetric latency. These protocols have no API for informing
> high-level code that the retransmission occurred. Therefore, the only truly
> safe and accurate way to conduct the latency measurement is to use a datagram
> protocol as just mentioned to avoid this problem. (Note however, that still
> can not assure a symmetric connection. For example, satellite based ISPs use
> modem up-links and high-bandwidth, variable latency satellite down-links).

This paper also proposes a modified SNTP algorithm designed to compensate for
intermittent random delays caused by TCP.

The timesync algorithm is also implemented in JS here:

https://github.com/enmasseio/timesync

This lib implements the algorithm in CLJS, pushing the ongoing offset refinement
into a Javelin cell.

This has several benefits:

- The CLJS implementation is far simpler than the JS version
- The use of Javelin avoids the need for a bespoke callback/event system
- No need for ES5/ES6 shims
- Can tweak the algorithm for faster convergence (see below)
- Supports arbitrary AJAX calls to 3rd party servers, GET/POST etc.
- Supports a parse function to normalise the response from 3rd party servers

## Usage

### Offset cell

Call `javelin-timesync.core/offset-cell` with a URL to GET as the first argument
and the following optional parameters:

- `:parse` a function that receives the response and returns a millisecond
  precision timestamp, defaults to `identity`.
- `:error-handler` a function to override the default error handler, receives
  the error as an argument.
- `:interval` milliseconds to wait between polls, defaults to `1000`.
- `:data-points` number of times to poll, defaults to `5`.

Example: Use [Ably's](https://www.ably.io/) free distributed timestamp servers.

```clojure
(javelin-timesync.core/offset-cell
  "https://rest.ably.io/time?v=1.0"
  :parse first) ; Ably returns an array of the timestamp
```

`javelin-timesync.core/offset-cell` is memoized so calling it with the same
arguments returns the same cell. This avoids unneccessary round trips to the
same URL and reduces the need for co-ordination in your application logic.

If you want the uncached version of `offset-cell` then call `-offset-cell`.

### Synced time

Simply add the value of an offset cell to get the current best estimate offset
for the current time.

```clojure
; early in application logic...
(javelin-timesync.core/offset-cell ...)

; later...
(+ (.getTime (js/Date.)) @(javelin-timesync.core/offset-cell ...)) ; synced timestamp
```

There is a convenience function `javelin-timesync.core/server-time` that takes
an offset and returns the time at the server:

```clojure
(javelin-timesync.core/server-time @(javelin-timesync.core/offset-cell ...))
```

Note how the memoize can be used to avoid the need for tracking `defonce` or
similar. Of course, you can keep a reference to the cell if you'd like.

Also note that the value of the offset cell will always be `0` upon creation. At
least one server round-trip will need to complete before the cell contains
anything meaningful.

As per the original whitepaper:

> This latency error, which is caused by both the effects of Internet router and
> modem latency as well as re-transmissions from dropped packets in a
> connection-oriented protocol such as TCP, is highly significant and can range
> from 100-3000ms. Simplistic studies conducted by the author suggest that
> humans are sensitive to action latencies (time between request and visual
> confirmation of action) of anything over 150ms.

Attempting to use the offset value before several polls have completed can
result in innaccuracy of up to 3s (still much better than a whole timezone!).

After 5+ polls have completed it is safe to assume sub 100ms precision.

> This algorithm was thoroughly tested in NetStorm, Islands At War, a real-time
> Internet strategy game co-implemented by the author at Titanic Entertainment
> in 1997. The results were completely satisfactory and usually resulted in
> synchronizations less than 100ms. Anecdotal evidence in large scale trials
> suggested that bad synchronizations due to retransmission were infrequent and
> when they did occurred were frequently symptomatic of an unusually bad
> Internet connections that typically caused more catastrophic errors (such as
> dropped connections) rendering the failure to time-sync mute.

This does assume that there is a pause of "a few seconds" between each new data
point in the offset calculation.

Heavy load on the browser can also skew the offset if it delays the processing
of incoming server responses on the main JavaScript thread.

In my own testing, against Ably's time servers and my computer synced with the
Mac OS X NTP, the offsets look like this:

- Init: 0
- First poll: +/- 5-200ms, commonly 20-30ms
- Second poll: +/- 1-20ms
- Subsequent polls: +/- 1-2ms

This is with a decent, stable internet connection (by Australian standards).

The result of the first poll is essentially what SNTP offers. We can see this
approach is much better!

### Difference from the original algorithm

The offset in the offset cell is filtered and updated on every poll.

The original algorithm works like this:

1. Calculate the first data point and use it as the offset
2. Calculate 4+ more data points _without_ updating the offset
3. Filter outliers using a standard deviation, _then_ update the offset

This algorithm works like this:

1. Calculate the first data point and use it as the offset
2. Calculate 4+ more data points, filtering and updating the offset for each

This is achieved with a simple `filter` cell watching all seen data points,
rather than destructively analysing and throwing away data "at the end".

This should converge much faster/smoother to the correct offset and means that a
large `:data-points` value will not delay convergence unneccessarily.

### Error handling

The default error handling is to log a warning to the console, wait `:interval`
milliseconds and then retry that data point.

This can be overriden as `:error-handler` under `:ajax` as per
https://github.com/JulianBirch/cljs-ajax#getpostput

### But I don't use Javelin!

No problem.

Javelin cells work exactly like native clojure `atom`.

You can `deref` and `add-watch` on a javelin cell.
