<script>
	import { onMount } from 'svelte';

	// DOM Elements
	let slider, slideImage;
	const imagePaths = [
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
		animationID = 0;

	export var currentIndex = 0;

	export function changed() {
		setPositionByIndex();
	}

	// Helpers
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
<div class="wraper">
	<list bind:this={slider}>
		{#each imagePaths as path}
			<div on:dragstart|preventDefault class="slide">
				<img bind:this={slideImage} src="images/{path}" alt="" on:dragstart|preventDefault />
			</div>
		{/each}
	</list>
</div>

<style>
	list {
		width: max-content;
		height: 25vw;
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
		margin-left: 2.5vw;
		/* height: 20vw; */
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
