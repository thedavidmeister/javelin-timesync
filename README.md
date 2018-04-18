# javelin-timesync

Simple time syncing algorithm implementation in Javelin in ClojureScript.

https://github.com/hoplon/javelin

## Motivation

Getting reliable times in the browser can be a real pain. Users can set their
system time to anything they want and there's no tools exposed to JavaScript, or
ClojureScript by extension, to respond to this.

(S)NTP works over UDP, whereas browsers typically only offer TCP, making it
impossible to connect directly to real NTP servers (e.g. `time.google.com`).

This article sums up the problems of (S)NTP over TCP well:

http://www.mine-control.com/zack/timesync/timesync.html

> Extremely robust but slow-to-converge synchronization techniques such as NTP
> have been proposed and developed by Mills, et al. Simpler alternatives are
> also in use such as SNTP [MILLS96]. Both of the protocols have deployment
> problems for computer games such as the fact that they are both data-gram
> based (UDP) as well as are either complex (NTP) or too-inaccurate (SNTP). This
> paper proposes an extremely simple alternative ... suitable for many network
> games and can be used on top of a stream-oriented protocol such as TCP.

The timesync algorithm is also implemented in JS here:

https://github.com/enmasseio/timesync

This lib implements the algorithm in CLJS, pushing the ongoing offset refinement
into a Javelin cell. This avoids the need for a bespoke callback/event system to
broadcast the any offset changes to the rest of the application.

## Usage

### Offset cell

Call `javelin-timesync/offset-cell` with a URL to poll and the following
optional parameters.

- `:parse` a function that receives the response and returns a millisecond
  precision timestamp, defaults to `identity`.
- `:delay` milliseconds to delay between polls, defaults to `1000`.
- `:data-points` number of times to poll, defaults to `5`.
- `:ajax` additional parameters to pass to https://github.com/JulianBirch/cljs-ajax.

Example: Use [Ably's](https://www.ably.io/) free distributed timestamp servers.

```clojure
(javelin-timesync/offset-cell
  "https://rest.ably.io/time?v=1.0"
  {:parse (fn [[v]] v)} ; Ably returns an array, so destructure the result
)
```

`javelin-timesync/offset-cell` is memoized so calling it with the same arguments
returns the same cell. This avoids unneccessary round trips and reduces the need
for co-ordination in your application logic.

### Synced time

Simply add the value of an offset cell to get the current best estimate offset
for the current time.

```clojure
; early in application logic...
(javelin-timesync/offset-cell ...)

; later...
(+ (.getTime (js/Date.)) @(javelin-timesync/offset-cell ...)) ; synced timestamp
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

The default error handling is to log a warning to the console, wait `:delay`
milliseconds and then retry that data point.

This can be overriden as `:error-handler` under `:ajax` as per
https://github.com/JulianBirch/cljs-ajax#getpostput
