<footer>
	<h3>Contributed by open-source team DevBassement</h3>

	<div class="info">
		<a href="https://github.com/EndorFlem/PurplePrints" id="icon">
			<img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" id="icon" class="cat" />
		</a>
		<a href="https://github.com/EndorFlem/PurplePrints" id="text" class="link ">Our Github</a>
	</div>
</footer>

<style>
	footer {
		margin-top: auto;
	}
	.cat {
		filter: invert(54%) sepia(13%) saturate(6635%) hue-rotate(228deg) brightness(97%) contrast(77%);
		transition: 0.2s;
	}
	.cat:hover {
		filter: invert(11%) sepia(56%) saturate(5177%) hue-rotate(263deg) brightness(101%)
			contrast(114%);
		transition: 0.2s;
	}
	.info {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	img {
		border-radius: 10px;
	}
	h3 {
		margin-left: auto;
		margin-right: auto;
		width: fit-content;
		color: lightgray;
		padding-bottom: 1%;
	}

	#icon {
		width: 50px;
	}
	#text {
		width: fit-content;
		/* margin-left: -10%; */
		padding: 5px;
		border-radius: 10px;
	}
</style>
