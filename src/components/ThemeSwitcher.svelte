<script lang="ts">
	import { theme_counter } from '../store';
	let themes = ['light', 'dark'];
	let current_theme_index = theme_counter.get_index();
	$: current_theme = themes[current_theme_index];
	function changeTheme() {
		current_theme_index = theme_counter.next(themes.length);
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="themes/{current_theme}.css" />
</svelte:head>

<theme-switcher>
	<input type="checkbox" checked={theme_counter.get_index() == 0} id="switcher" />
	<label for="switcher" on:click={changeTheme}>
		<div class="ball" />
		<span class="material-symbols-outlined dark">dark_mode</span>
		<span class="material-symbols-outlined light">light_mode</span>
	</label>
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
	@keyframes theme-switch {
		from {
			background-color: beige;
		}
		to {
			background-color: darkslateblue;
		}
	}
	@keyframes switcher {
		from {
			left: 0;
		}
		to {
			left: 35px;
		}
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
