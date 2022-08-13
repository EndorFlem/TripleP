<script>
	let imageNummber = 0;
	let paths = ['UNITYTOP.jpg', 'SMERT.jpg', 'SMERTCPP.jpg', 'CRAZYSHIT.jpg'];
	function next() {
		imageNummber = (imageNummber + 1) % paths.length;
	}
	function previous() {
		imageNummber = (imageNummber - 1 + paths.length) % paths.length;
	}

	import Slider from '../test-slider.svelte';
</script>

<slider>
	<!-- <button class="left" on:click={previous}>
		<span class="material-symbols-outlined">keyboard_double_arrow_left</span>
		<div class="block" />
	</button>
	<img src="images/UNITYTOP.jpg" id="1" alt="" />
	<img src="images/SMERT.jpg" id="2" alt="" />
	<img src="images/SMERTCPP.jpg" id="3" alt="" />
	<img src="images/CRAZYSHIT.jpg" id="4" alt="" />
	<button class="right" on:click={next}>
		<span class="material-symbols-outlined">double_arrow</span>
		<div class="block" />
	</button> -->
	<Slider />
</slider>

<style>
	img {
		width: 80%;
		border-radius: 20px;
		transition: 1s;
		left: 0;
	}
	slider {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		flex: 1 1 0px;
		margin-right: auto;
		margin-left: auto;
	}
	button {
		background-color: rgba(0, 0, 0, 0);
		border: 0px;
		padding: 0;
		width: 20%;
		height: 100%;
	}
	.left {
		margin-left: auto;
		/* margin-right: auto; */
	}
	.right {
		margin-left: auto;
		/* margin-right: 10%; */
	}
	.block {
		background-color: red;
		width: auto;
	}
</style>
