<script>
	export let ava, description, name;
</script>

<card-template>
	<img src={ava} alt="" />
	<h1>{name}</h1>
	<p class="text">{description}</p>
</card-template>

<style>
	card-template {
		width: 30%;
		height: 50%;
		background-color: #400599;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-left: auto;
		margin-right: auto;
		padding-top: 1%;
		padding-bottom: 1%;
		border-radius: 10px;
		margin-top: 1%;
		z-index: 2;
	}
	img {
		border-radius: 50%;
		width: 70%;
		z-index: 2;
	}
	p {
		margin-top: 5px;
		width: 70%;
		background-color: #a275dc;
	}

	h1 {
		color: lightgray;
		/* color: gradient(#400599, #a275dc); */
		/* background-image: linear-gradient(90deg, rgba(64, 5, 153, 1) 0%, rgba(162, 117, 220, 1) 68%); */
		/* -webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-background-clip: text;
		-moz-text-fill-color: transparent; */
		text-align: center;
	}
</style>
