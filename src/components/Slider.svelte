<script>
	import { onMount } from 'svelte';

	let slider, slideImage;
	const imagePaths = ['UNITYTOP.jpg', 'SMERT.jpg', 'SMERTCPP.jpg', 'CRAZYSHIT.jpg'];

	let isDragging = false,
		startPos = 0,
		currentTranslate = 0,
		prevTranslate = 0,
		animationID = 0,
		currentIndex = 0;

	function next(imageNummber) {
		return (imageNummber + 1) % imagePaths.length;
	}
	function previous(imageNummber) {
		return (imageNummber - 1 + imagePaths.length) % imagePaths.length;
	}

	function setPositionByIndex() {
		currentTranslate = currentIndex * -window.innerWidth;
		prevTranslate = currentTranslate;
		setSliderPosition();
	}
	function setSliderPosition() {
		slider.style.transform = `translateX(${currentTranslate}px)`;
	}

	onMount(() => {
		const slides = document.querySelectorAll('.slide');
		slides.forEach((slide, index) => {
			slide.addEventListener('touchstart', touchStart(index));
			slide.addEventListener('touchend', touchEnd);
			slide.addEventListener('touchmove', touchMove);

			slide.addEventListener('mousedown', touchStart(index));
			slide.addEventListener('mouseup', touchEnd);
			slide.addEventListener('mouseleave', touchEnd);
			slide.addEventListener('mousemove', touchMove);
		});

		function touchStart(index) {
			return function (event) {
				currentIndex = index;
				startPos = getPositionX(event);
				isDragging = true;
				animationID = requestAnimationFrame(animation);
				slider.classList.add('grabbing');
			};
		}

		function touchEnd() {
			isDragging = false;
			cancelAnimationFrame(animationID);
			const movedBy = currentTranslate - prevTranslate;
			if (movedBy < -100) currentIndex = (currentIndex + 1) % imagePaths.length;
			if (movedBy > 100) currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
			setPositionByIndex();
			slider.classList.remove('grabbing');
		}

		function touchMove(event) {
			if (isDragging) {
				const currentPosition = getPositionX(event);
				currentTranslate = prevTranslate + currentPosition - startPos;
			}
		}

		// Helper functions
		function getPositionX(event) {
			return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
		}

		function animation() {
			setSliderPosition();
			isDragging && requestAnimationFrame(animation);
		}
	});
</script>

<svelte:window on:contextmenu|preventDefault|stopPropagation />
<slider>
	<button
		class="left"
		on:click={() => {
			currentIndex = previous(currentIndex);
			setPositionByIndex();
		}}
	>
		<span class="material-symbols-outlined">keyboard_double_arrow_left</span>
		<div class="li invisnible body" />
	</button>
	<list bind:this={slider}>
		{#each imagePaths as path}
			<div on:dragstart|preventDefault class="slide">
				<img bind:this={slideImage} src="images/{path}" alt="" on:dragstart|preventDefault />
			</div>
		{/each}
	</list>
	<button
		class="right"
		on:click={() => {
			currentIndex = next(currentIndex);
			setPositionByIndex();
			console.log(currentIndex);
		}}
	>
		<span class="material-symbols-outlined">double_arrow</span>
		<div class="ri invisnible body" />
	</button>
</slider>

<style>
	.invisnible {
		width: 4.7vw;
		height: 40.5vw;
		margin-top: -21vw;
		position: absolute;
		z-index: 0;
	}
	.ri {
		margin-left: 6vw;
	}
	.li {
		margin-left: -5.7vw;
	}

	slider {
		display: inline;
		margin-right: auto;
		margin-left: auto;
	}
	button {
		background-color: rgba(0, 0, 0, 0);
		border: 0px;
		width: 5%;
		height: 40vw;
		padding-top: auto;
		padding-bottom: auto;
		position: absolute;
		z-index: 10;
		transition: all 0s;
	}
	.left {
		margin-left: auto;
	}
	.right {
		margin-left: 85%;
		margin-top: -40%;
	}
	list {
		width: max-content;
		height: 40vw;
		display: flex;
		overflow: hidden;
		transform: translateX(0);
		transition: transform 0.3s ease-out;
		cursor: grab;
	}

	list > :not(:first-child) {
		margin-left: 10vw;
	}
	.slide {
		width: 85vw;
		height: 100%;
		margin-left: 2.5vw;
		user-select: none;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 5vw;
	}

	img {
		width: 90%;
		height: 100%;
		transition: transform 0.3s ease-in-out;
		border-radius: 20px;
	}

	:global(.grabbing img) {
		transform: scale(0.9);
	}
</style>
