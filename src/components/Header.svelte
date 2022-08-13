<script>
	import NavMenu from './NavMenu.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<svelte:head>
	<title>Purple Prints</title>
	<link rel="stylesheet" href="purple.css" />
</svelte:head>

<header>
	<ThemeSwitcher />
	<div class="label">
		<img src="images/Icon.svg" class="logo" alt="" />
		<h1 class="title">Purple Prints</h1>
	</div>
	<NavMenu />
</header>

<style>
	.label {
		color: gray;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 1%;
	}
	.title {
		position: absolute;
		font-size: 5vw;
	}
</style>
