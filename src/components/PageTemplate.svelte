<script>
	import Header from './Header/Header.svelte';
	import Footer from './Footer/Footer.svelte';
</script>

<Header />
<div class="body">
	<slot />
</div>
<Footer />

<style>
	.body {
		display: flex;
		flex-direction: column;
		min-height: 80vh;
	}
</style>
