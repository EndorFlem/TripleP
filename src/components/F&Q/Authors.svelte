<script>
	import CardTemplate from './CardTemplate.svelte';
</script>

<div class="section">
	<h2 class="section-title">Our devs !</h2>
	<div class="cards">
		<CardTemplate
			ava="images/Soler.jpg"
			name="EndorFlem"
			description="FrontEnd and design develoment. Author of idea"
		/>
		<CardTemplate ava="images/SirGay.png" name="Sir Gay" description="Core developer" />
	</div>
</div>

<style>
	.cards {
		width: 100%;
		display: inline-flex;
		margin-left: auto;
		margin-right: auto;
	}
	h2 {
		margin-left: auto;
		margin-right: auto;
		margin-top: 1%;
	}
</style>
