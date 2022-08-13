import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	adapter: adapter({
		pages: 'build',
		assets: 'build',
		fallback: null,
		precompress: false
	}),
	kit: {
		adapter: adapter()
	}
};

export default config;
