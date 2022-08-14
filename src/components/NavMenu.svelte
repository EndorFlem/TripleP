<nav>
	<ul>
		<li><a href="/" class="link">Home</a></li>
		<li><a href="/DemoPage" class="link">Demo</a></li>
		<li><a href="/MoreInfo" class="link">Sources and more info</a></li>
		<li><a href="/Tutorial" class="link">Tutorial</a></li>
	</ul>
</nav>

<style>
	/* @media screen and (max-width: 1920) { */
	nav {
		width: fit-content;
		margin-left: auto;
		margin-right: 10%;
	}
	ul {
		list-style-type: none;
		display: inline-flex;
	}
	li {
		margin: 5px;
		margin-bottom: 10px;
		border-radius: 10px;
		padding: 5px;
	}
	/* } */
	@media screen and (max-width: 800px) {
		a {
			font-size: 14px;
		}
		nav {
			width: 100%;
		}
		ul {
			justify-content: center;
			width: 100%;
		}
		li {
			margin: 5px 2.5px;
		}
	}
</style>
