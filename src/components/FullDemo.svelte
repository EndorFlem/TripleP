<script>
	let innerHeight = 0;
	let innerWidth = 0;
	// $: console.log(innerHeight, innerWidth);
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="full-demo section">
	{#if innerWidth > 800}
		<iframe src="https://repti-loid.github.io/PurplePrintsWebGL/" />
	{:else}
		<div class="warning">
			<h1 class="section-title">Your device's screen is too narrow</h1>
			<p class="text">Please, open this page on your desktop or laptop</p>
		</div>
	{/if}
	<div class="links">
		<a href="PurplePrintsDesktop.rar" class="link" download>Скачать</a>
		<a class="link" href="Tutorial" style="margin-left:1%">Справка</a>
	</div>
</div>

<style>
	.links {
		display: flex;

		justify-content: center;
		width: 95%;
		padding-bottom: 1%;
	}
	.full-demo {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	iframe {
		border: 0;
		width: 90%;
		height: 80vh;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 1%;
	}
</style>
