import {writable,get} from "svelte/store";


export const cartItems = writable<Cart[]>([]);


export const addProductToCart = (id: string) => {
    //just getting the items in the cart that we are using get
    //since cartItems is a writable object we cannot use that to get;

    const ItemsinCart = get(cartItems);


    let itemPresent = ItemsinCart.findIndex((items)=>{return items.id === id});

    if(itemPresent !== -1){
        ItemsinCart[itemPresent].quantity += 1;
        cartItems.set(ItemsinCart);
    }
    else{
        cartItems.update((items)=>[...items,{id:id,quantity:1}]);
    }
    
}

export const removeProductFromCart = (id: string) => {
    const ItemsinCart = get(cartItems);

    let itemPresent = ItemsinCart.findIndex((items)=>{return items.id === id});

    if(itemPresent !== -1){
        if(ItemsinCart[itemPresent].quantity > 1){
            ItemsinCart[itemPresent].quantity -= 1;
            cartItems.set(ItemsinCart);
        }
        else{
            cartItems.set(ItemsinCart.filter((items)=>{return items.id !== id}));
        }
    }
}