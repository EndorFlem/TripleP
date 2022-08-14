<script>
</script>

<div class="demo section">
	<video src="video.mp4" autoplay loop muted />
	<div class="description">
		<h2>Попробуйте прямо на сайте !</h2>
		<div class="text">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugiat molestias soluta cumque
			est ut voluptate expedita accusantium. Et excepturi, fugiat maxime dolor vel sunt! Id tenetur
			nesciunt magni sunt!
			<a href="DemoPage ">
				<div class="try link super-link">
					<h3>Попробуйте сами</h3>
					<span class="material-symbols-outlined"> code </span>
				</div>
			</a>
		</div>
	</div>
</div>

<style>
	.demo {
		display: flex;
		/* padding-left: 1px; */
	}
	.description {
		display: flex;
		flex-direction: column;
		/* max-height: 50vh; */
		margin-right: 1%;
	}
	h2 {
		text-align: center;
		margin-top: 2%;
		padding-right: 3px;
	}
	video {
		width: 60vw;
		margin-top: 1%;
		border-radius: 20px;
	}
	.try {
		margin-left: auto;
		margin-right: auto;
		width: 40%;
		border-radius: 20px;
		margin-top: 8%;
		width: min-content;
		padding: 5px;
	}
	.text {
		margin-top: 1%;
		width: 80%;
	}

	@media screen and (max-width: 800px) {
		.demo {
			flex-direction: column;
		}
		h2 {
			position: absolute;
			margin-top: -64%;
			width: fit-content;
			/* margin-left: 1%; */
		}
		.text {
			width: 95%;
		}
		video {
			margin-top: 12%;
			margin-bottom: 1%;
			width: 97.5%;
			margin-left: auto;
			margin-right: auto;
		}
		.description {
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>
