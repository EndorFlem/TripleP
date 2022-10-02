<script lang="ts">
	import { theme } from '../../store';
	// import { browser } from '$app/env';

	// let themes = ['light', 'dark'];
	// let current_theme_index = theme_counter.get_index();
	// $: current_theme = themes[current_theme_index];

	// if (browser) {
	// 	theme_counter.change_index(window.localStorage.getItem('user-theme') == 'light' ? 0 : 1);
	// 	current_theme_index = theme_counter.get_index();
	// }
	// function changeTheme() {
	// 	current_theme_index = theme_counter.next(themes.length);
	// 	current_theme = themes[current_theme_index];
	// 	window.localStorage.setItem('user-theme', current_theme);
	// }
</script>

<svelte:head>
	<!-- <link rel="stylesheet" href="themes/{current_theme}.css" /> -->
	<link rel="stylesheet" href="themes/{theme.get_theme()}.css" />
</svelte:head>

<theme-switcher>
	<!-- <input type="checkbox" checked={theme_counter.get_index() == 0} id="switcher" /> -->
	<!-- <label for="switcher" on:click={changeTheme}>
		<div class="ball" />
		<span class="material-symbols-outlined dark">dark_mode</span>
		<span class="material-symbols-outlined light">light_mode</span>
	</label> -->
</theme-switcher>

<style>
	input[type='checkbox']:checked + label {
		background-color: rgb(242, 242, 242);
		transition: 0.5s;
	}
	input[type='checkbox']:checked + label > .ball {
		left: 0;
		transition: 0.5s;
	}
	input[type='checkbox']:not(:checked) + label {
		background-color: rgb(20, 20, 20);
		transition: 0.5s;
	}
	input[type='checkbox']:not(:checked) + label > .ball {
		transition: 0.5s;
		left: 35px;
	}
	input[type='checkbox'] {
		/* margin-top: 100px;
		position: absolute; */
		display: none;
	}
	.ball {
		background-color: rgb(30, 30, 30);
		width: 26px;
		height: 26px;
		border-radius: 50%;
		z-index: 10;
		position: absolute;
	}
	label {
		background-color: beige;
		border-radius: 15px;
		display: inline-flex;
		width: 60px;
		height: 25px;
		align-items: center;
		box-shadow: inset 1px 1px 5px -3px;
	}
	span::selection {
		background: transparent;
	}
	span::-moz-selection {
		background: transparent;
	}
	.dark {
		color: yellow;
	}
	.light {
		color: orange;
		margin-left: auto;
	}
	theme-switcher {
		position: absolute;
		margin-left: 5%;
		margin-top: 2%;
		border-radius: 20px;
	}
</style>
