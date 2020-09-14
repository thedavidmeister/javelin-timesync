<script>
export let offset;

import 'javelin-timesync';

javelin_timesync.core.offset_cb(
 (context, key, ref, o, n) => {
  console.log('old', o)
  console.log('new', n)
 },
	"https://rest.ably.io/time?v=1.0",
	{'parse': (v) => { return v[0] }, 'interval': 2000, 'data-points': 10}
)

</script>

<main>
	<h1>Hello</h1>
	<p>Open the console to see the offset_cb.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
