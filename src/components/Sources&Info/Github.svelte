<div class="section">
	<h1 class="section-title">Свобода проекта - свобода творчества</h1>
	<div class="top card">
		<img src="images/NotOpenSource.webp" alt="" />
		<div class="substrate" />
		<p>
			МЫ ЗА ОПЕНСОУРС ! - типичный лозунг душевнобольных людей , состоящий в сектах и просящих не
			денег , звёздочек на GitHub'е , что переводится , как логово мерзавцев , что уже о многом
			говорит . "Лучше покакать , но опоздать , чем прийти и обосраться" - цитата нашего
			разработчика . "Лучше вызвать дурку сейчас , чем попасть в неё позже" - уже моя цитата и
			реакция на неадекватное поведение вышеописанного гаржданина . Мы отдали душу дьяволу и
			используем тёмную тему , потому что "если закрыть галаза , то становится темно" - опять же
			цитата нашего пациента
			<a class="link super-link" href="https://github.com/EndorFlem/PurplePrints">Our Github</a>
		</p>
	</div>
</div>
<div class="section">
	<h1 class="section-title">Это бесплатно и без лицензии ?</h1>
	<div class="card">
		<p class="text">
			Пока наш проект в стадии разработки он не имеет лицензии и не является ПО с открытым исходным
			кодом. В дальнейшем при релизи думаем выложить всё под лицензией MIT или другой свободной
			лицензией.
		</p>
	</div>
</div>

<style>
	p {
		padding-bottom: 2.5%;
	}
	img {
		border-radius: 20px;
		margin-left: auto;
		margin-right: auto;
		width: 40vw;
	}
	.card {
		display: inline-flex;
		margin-top: 1%;
	}
	.top > p {
		background-color: #400599;
		text-align: left;
		padding: 10px;
		margin-left: 1%;
		border-radius: 10px;
	}
	.link {
		margin-left: auto;
		margin-right: auto;
		margin-top: 2%;
		padding: 5px 5px;
		display: block;
		width: fit-content;
		/* position: absolute;
		bottom: 25%;
		right: 30%; */
	}
	.text {
		margin-left: auto;
		margin-right: auto;
	}

	@media screen and (max-width: 800px) {
		.substrate {
			background-color: #31007a;
			width: 58vw;
			height: 35vw;
			position: absolute;
			z-index: 1;
			border-radius: 10px 10px 10px 10px;
		}
		.top > p {
			margin-left: 0;
			font-size: small;
		}
		img {
			width: 55vw;
			margin-top: 1%;
			float: right;
			position: relative;
			z-index: 2;
			padding: 5px;
		}
		.link {
			margin-top: 1%;
		}
		.card {
			display: block;
			direction: rtl;
		}
	}
</style>
