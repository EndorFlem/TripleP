<script>
	let currentIndex = 0;
	let paths = ['UNITYTOP.jpg', 'SMERT.jpg', 'SMERTCPP.jpg', 'CRAZYSHIT.jpg'];
	function next(imageNummber) {
		return (imageNummber + 1) % paths.length;
	}
	function previous(imageNummber) {
		return (imageNummber - 1 + paths.length) % paths.length;
	}
	import ImageList from '../test-slider.svelte';
</script>

<slider>
	<button
		class="left"
		on:click={() => {
			currentIndex = previous(currentIndex);
		}}
	>
		<span class="material-symbols-outlined">keyboard_double_arrow_left</span>
		<div class="li invisnible body" />
	</button>

	<ImageList bind:currentIndex />

	<button
		class="right"
		on:click={() => {
			currentIndex = next(currentIndex);
		}}
	>
		<span class="material-symbols-outlined">double_arrow</span>
		<div class="ri invisnible body" />
	</button>
</slider>

<style>
	.invisnible {
		width: 4.7vw;
		height: 50vh;
		margin-top: -26.5vh;
		position: absolute;
		z-index: 0;
	}
	.ri {
		margin-left: 6vw;
	}
	.li {
		margin-left: -5.7vw;
	}

	slider {
		display: inline;
		margin-right: auto;
		margin-left: auto;
	}
	button {
		background-color: rgba(0, 0, 0, 0);
		border: 0px;
		width: 5%;
		height: 25vw;
		padding-top: auto;
		padding-bottom: auto;
		position: absolute;
		z-index: 10;
		transition: all 0s;
	}
	.left {
		margin-left: auto;
	}
	.right {
		margin-left: 85%;
		margin-top: -25%;
	}
</style>
