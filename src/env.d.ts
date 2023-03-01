/// <reference types="vite/client" />

declare module '*.vue' {
	import { DefineComponent, defineComponent } from "vue";
	const component: DefineComponent<{},{},any>;
	export default component;
}

interface ImportMetaEnv {
	readonly VITE_APP_TITLE: string;
}
