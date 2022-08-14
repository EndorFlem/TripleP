<script>
</script>

<div class="info section">
	<h1>Визуальное программирование для малолетних дебилов</h1>
	<div class="table">
		<img src="images/UNITYDNO.jpg" alt="" />
		<div class="important text">
			<h2>Почему это так важно ?</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quod aperiam a, est ex
				libero neque nostrum veritatis sed nam repudiandae dolore magnam quam. Fugit laborum nostrum
				culpa in mollitia!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe aperiam magnam tempora
				incidunt, ex ducimus et repellat quos dignissimos eos aliquid, ad beatae maiores eligendi ab
				corrupti dolorem molestias.
			</p>
		</div>
	</div>
</div>

<style>
	.info {
		text-align: center;
	}
	.table {
		display: inline-flex;
		margin-top: 1%;
	}
	img {
		width: 50%;
		border-radius: 20px;
		margin-left: auto;
		margin-right: auto;
	}
	.important {
		width: 45%;
		display: block;
		margin-left: auto;
		margin-right: auto;
		border-radius: 20px;
	}
	p {
		width: 50%;
		margin-left: auto;
		margin-right: auto;
	}

	@media screen and (max-width: 800px) {
		h1 {
			font-size: larger;
		}
		.table {
			display: flex;
			flex-direction: column;
			width: 97%;
			margin-left: 5px;
			margin-right: 5px;
		}
		img {
			width: 100%;
			margin-left: auto;
			margin-right: auto;
		}
		.important {
			margin-left: auto;
			margin-right: auto;
			margin-top: 10px;
			width: 97%;
			margin-bottom: 5px;
		}
		p {
			width: 100%;
		}
	}
</style>
