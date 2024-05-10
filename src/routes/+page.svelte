<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang='ts'>
	import ProductCard from "$lib/productCard.svelte";
	import {get} from "svelte/store";
	import {cartItems} from "../card"
	const products : Product[] = [
		{
			id: "price_1McfalGEQ8u28rQ5BZ8bAlqT",
			name: "Coffee",
			amount: 20
		},
		{
			id: "price_1McfbuGEQ8u28rQ5mEO9kZeB",
			name: "Tea",
			amount: 10
		},
		{
			id: "price_1McfcaGEQ8u28rQ56pMnyDz1",
			name: "Milk",
			amount: 10
		}
		
	]
	async function checkout() {
		await fetch("api/stripeCheckout", { 
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(
				{ items: get(cartItems) }
			)
		}).then((data) => {
			return data.json()
		}).then((data) => {
			window.location.replace(data.url);
		});
	}

</script>
<div class="container h-full mx-auto flex justify-center items-center">
<div class = "grid grid-cols-3 gap-4">
	<div class=" col-span-3">
		<h1>Skelteon Ui Cards</h1>
	</div>
	{#each products as product }
	<ProductCard {product} />
	{/each}
	
	<div class=" col-span-3">
		<button class="btn variant-filled-primary" on:click={() => checkout()}>Checkout with Stripe API</button>
	</div>

</div>
</div>
