<script>
	import NavMenu from './NavMenu.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';

	//delete
	function bug() {
		alert(
			'Если вы нашли какой-нибудь баг, то перейдите по этой ссылке ' +
				'https://youtu.be/AMpbz1u8eaE'
		);
	}
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

	<!-- delete -->
	<div class="delete">
		<button class="bug-alert" style="background-color: red; border: none" on:click={bug}
			>bug alert !</button
		>
	</div>
</header>

<style>
	.label {
		color: gray;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 1%;
		width: 100vw;
	}
	.title {
		position: absolute;
		font-size: 60px;
		z-index: 10;
	}

	@media screen and (max-width: 800px) {
		.title {
			font-size: 55px;
			padding-top: 5px;
			margin-left: calc(((100vw) - 55px) / 2);
			margin-right: calc(((100vw) - 55px) / 2);
		}
	}
</style>
