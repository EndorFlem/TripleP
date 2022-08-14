<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import FullDemo from '../components/FullDemo.svelte';
	import DemoInfo from '../components/DemoInfo.svelte';
</script>

<svelte:head>
	<title>Purple Prints</title>
</svelte:head>

<Header />
<div class="page body">
	<DemoInfo />
	<FullDemo />
</div>
<Footer />

<style>
</style>
