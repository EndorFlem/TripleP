<script>
	let imageNummber = 0;
	let paths = ['UNITYTOP.jpg', 'SMERT.jpg', 'SMERTCPP.jpg', 'CRAZYSHIT.jpg'];
	function next() {
		imageNummber = (imageNummber + 1) % paths.length;
	}
	function previous() {
		imageNummber = (imageNummber - 1 + paths.length) % paths.length;
	}
</script>

<slider>
	<button class="left" on:click={previous}>
		<span class="material-symbols-outlined">keyboard_double_arrow_left</span>
		<div class="block" />
	</button>
	<img src="images/{paths[imageNummber]}" alt="" />
	<!-- <img src="images/computer work.jpg"> -->
	<button class="right" on:click={next}>
		<span class="material-symbols-outlined">double_arrow</span>
		<div class="block" />
	</button>
</slider>

<style>
	img {
		width: 80%;
		border-radius: 20px;
	}
	slider {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		flex: 1 1 0px;
		margin-right: auto;
		margin-left: auto;
		/* width: 80%; */
	}
	button {
		background-color: rgba(0, 0, 0, 0);
		border: 0px;
		/* max-width: 3%; */
		padding: 0;
		width: 20%;
		height: 100%;
		/* width: 10%; */
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
