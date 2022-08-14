<script>
	let imageNumber = 0;
	let paths = ['UNITYTOP.jpg', 'SMERT.jpg', 'SMERTCPP.jpg', 'CRAZYSHIT.jpg'];
	function next(imageNummber) {
		return (imageNummber + 1) % paths.length;
	}
	function previous(imageNummber) {
		return (imageNummber - 1 + paths.length) % paths.length;
	}
</script>

<slider>
	<button
		class="left"
		on:click={() => {
			imageNumber = previous(imageNumber);
			console.log(imageNumber);
		}}
	>
		<span class="material-symbols-outlined">keyboard_double_arrow_left</span>
	</button>

	<img src="images/{paths[imageNumber]}" alt="" />

	<button
		class="right"
		on:click={() => {
			imageNumber = next(imageNumber);
		}}
	>
		<span class="material-symbols-outlined">double_arrow</span>
	</button>
</slider>

<style>
	.wrapper {
		display: inline;
		overflow: hidden;
	}
	img {
		width: 100%;
		border-radius: 20px;
		padding-left: auto;
		transition: transform 0.3s ease-out;
		overflow: hidden;
		display: flex;
	}
	slider {
		display: inline-flex;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
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
</style>
