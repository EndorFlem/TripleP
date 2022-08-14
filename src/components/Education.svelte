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
		<h2>ФИгня</h2>
		<p class="text">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente aliquid fugiat ut nostrum,
			recusandae facilis praesentium modi sequi, veniam maxime voluptate itaque optio. Eum molestiae
			similique provident ea illo officiis.
		</p>
	</div>
</div>

<style>
	h1 {
		text-align: center;
		margin-bottom: 1%;
	}
	.panel {
		border-radius: 10px;
		flex: auto;
		padding-bottom: 1%;
	}
	.bottom-panels {
		width: 90%;
		margin-left: auto;
		margin-right: auto;
	}
	h2 {
		text-align: center;
	}
	.right {
		margin-left: 1%;
	}
	.bottom-panels {
		display: flex;
		flex-direction: row;
		padding-bottom: 1%;
		width: 92%;
	}
</style>
