<script lang="ts">
	import { get } from "svelte/store";


  import {cartItems, addProductToCart , removeProductFromCart } from "../card";
  let cart = get(cartItems);
  let cartIndex = cart.findIndex((item)=>{return item.id === product.id});
  //note important its product.id
  let cartItem = cart[cartIndex];
  cartItems.subscribe((newValue)=>{
    cart = newValue;
    cartIndex = cart.findIndex((item)=>{return item.id === product.id});
    cartItem = cart[cartIndex];
  });


    export let product : Product = {
        id: "",
        name: "",
        amount: 0
    }
</script>


<div class="card p-6 size-42"> 
    <header class="card-header"><h2>{product.name}</h2></header>
    <div class="card-body px-2">
        Quantity: <strong>{#if cartItem}{cartItem.quantity}{:else}0{/if}</strong>
    </div>
    <div class="card-body px-2">
        Price: {product.amount}
    </div>
    <footer>
        <button class="p-2 rounded variant-filled-primary" on:click={()=>addProductToCart(product.id)}>ADD</button>
        <button class="p-2 rounded variant-filled-error" on:click={()=>removeProductFromCart(product.id)}>Remove</button>
    </footer>
</div>
