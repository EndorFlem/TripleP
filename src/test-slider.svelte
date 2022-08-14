<script>
	import { onMount } from 'svelte';

	// DOM Elements
	let slider, slideImage;
	const paths = [
		'UNITYTOP.jpg',
		'SMERT.jpg',
		'SMERTCPP.jpg',
		'CRAZYSHIT.jpg',
		'CRAZYSHIT.jpg',
		'CRAZYSHIT.jpg'
	];
	// State
	let isDragging = false,
		startPos = 0,
		currentTranslate = 0,
		prevTranslate = 0,
		animationID = 0,
		currentIndex = 0;

	onMount(() => {
		const slides = document.querySelectorAll('.slide');
		slides.forEach((slide, index) => {
			// Touch event listeners
			slide.addEventListener('touchstart', touchStart(index));
			slide.addEventListener('touchend', touchEnd);
			slide.addEventListener('touchmove', touchMove);
			// Mouse event listeners
			slide.addEventListener('mousedown', touchStart(index));
			slide.addEventListener('mouseup', touchEnd);
			slide.addEventListener('mouseleave', touchEnd);
			slide.addEventListener('mousemove', touchMove);
		});

		// Event callbacks
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
			if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;
			if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;
			// if (movedBy < -50 && currentIndex < slides.length - 1) currentIndex += 1;
			// if (movedBy > 50 && currentIndex > 0) currentIndex -= 1;
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

		function setSliderPosition() {
			slider.style.transform = `translateX(${currentTranslate}px)`;
		}

		function setPositionByIndex() {
			currentTranslate = currentIndex * -window.innerWidth;
			prevTranslate = currentTranslate;
			setSliderPosition();
		}
	});
</script>

<svelte:window on:contextmenu|preventDefault|stopPropagation />

<article bind:this={slider}>
	{#each paths as path}
		<div on:dragstart|preventDefault class="slide">
			<img bind:this={slideImage} src="images/{path}" alt="" on:dragstart|preventDefault />
		</div>
	{/each}
</article>

<style>
	article {
		width: max-content;
		display: flex;
		overflow: hidden;
		transform: translateX(0);
		transition: transform 0.3s ease-out;
		cursor: grab;
	}

	div {
		width: 100vw;
		padding: 1rem;
		user-select: none;
	}

	img {
		max-width: 100%;
		max-height: 50%;
		width: 80%;
		margin-left: 10%;
		margin-right: 5%;
		transition: transform 0.3s ease-in-out;
	}

	:global(.grabbing img) {
		transform: scale(0.9);
	}
</style>
