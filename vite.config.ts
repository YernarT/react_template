import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

function pathResolve(dir: string): string {
	return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [
			{
				find: '@',
				replacement: pathResolve('src') + '/',
			},
			{
				find: '#',
				replacement: pathResolve('types') + '/',
			},
		],
	},
	plugins: [react()],
});
