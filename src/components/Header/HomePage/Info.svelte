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
		width: 53.5%;
		border-radius: 20px;
		margin-left: auto;
		margin-right: auto;
	}
	.important {
		width: 45%;
		margin-left: auto;
		margin-right: auto;
		border-radius: 20px;
	}
	p {
		width: 100%;
		margin-left: auto;
		margin-right: auto;
	}

	@media screen and (max-width: 800px) {
		h1 {
			font-size: larger;
		}
		.table {
			display: flex;
			margin-right: auto;
			margin-left: auto;
			flex-direction: column;
			width: 97%;
		}
		img {
			margin-left: 20%;
			max-width: 100000px;
			width: 100% !important;
			height: auto;
			margin: 0;
		}
		.important {
			margin-top: 10px;
			width: 97%;
			margin-bottom: 5px;
			margin-left: 0% !important;
		}
		p {
			/* width: 100%; */
		}
	}
	@media screen and (max-width: 1000px) {
		img {
			width: 60%;
		}
		.important {
			margin-left: 1%;
		}
		p {
			margin-left: 0;
			margin-right: 0;
			width: 100%;
		}
	}
</style>
