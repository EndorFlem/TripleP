<script>
	import Slider from './Slider.svelte';
</script>

<div class="main-slide section">
	<h1>Программирование в каждый класс информатики !</h1>
	<Slider />
</div>
<div class="bottom-panels">
	<div class="left panel">
		<h2>Программирование важно !</h2>
		<p class="text">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente aliquid fugiat ut nostrum,
			recusandae facilis praesentium modi sequi, veniam maxime voluptate itaque optio. Eum molestiae
			similique provident ea illo officiis.
		</p>
	</div>
	<div class="right panel">
		<h2>Фигня</h2>
		<p class="text">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente aliquid fugiat ut nostrum,
			recusandae facilis praesentium modi sequi,
		</p>
	</div>
</div>

<style>
	h1 {
		text-align: center;
		margin-bottom: 1%;
	}
	.panel {
		/* width: 40.5%; */
		border-radius: 10px;
		padding-bottom: 1%;
		/* background-color: aqua; */
	}
	.bottom-panels {
		margin-left: auto;
		margin-right: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 92%;
	}
	h2 {
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5px;
	}
	.right {
		margin-left: 1%;
	}

	@media screen and (max-width: 800px) {
		h2 {
			margin-bottom: 1%;
			padding: 10px;
		}
		.bottom-panels {
			width: 95%;
			margin-top: 5px;
			padding-bottom: 5px;
		}
		.right {
			margin-left: 2%;
			padding-left: 0.5px;
			width: 39%;
		}
		.right > .text {
			width: 85%;
		}
		.left {
			width: 61%;
		}
		.left > .text {
			height: 78.5%;
		}
		.panel {
			height: 35vh;
		}
		.left > h2 {
			font-size: large;
		}
		p {
			font-size: 0.85rem;
		}
		.text {
			height: 78.8%;
		}
	}
</style>
