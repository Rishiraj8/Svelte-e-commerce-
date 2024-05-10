// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}


declare class Product{
	id: string;
	name: string;
	amount: number;
}

declare class Cart{
	id: string;
	quantity: number;
}

declare class POST{
    id
}