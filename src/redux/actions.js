import { SHOWGALLERY,INVITECAKE,SHOWCART,REMOVEFROMCART,ADDTOCART,REDUCEFROMCART,ADDRETURN,ADDALLRETURN } from "./actionTypes";

export const show=(id, value)=>({
    type: SHOWGALLERY,
    payload:{ id,value},
});

export const inviteCake=(id)=>({
    type: INVITECAKE,
    payload:id,
});
export const addToCart=(product)=>({
    type: ADDTOCART,
    payload:product,
});
export const removeFromCart=(id)=>({
    type: REMOVEFROMCART,
    payload:id,
});
export const reduceFromCart=(id)=>({
    type: REDUCEFROMCART,
    payload:id,
});
export const showCart=(id)=>({
    type: SHOWCART,
    payload:id,
});

export const addReturn=(id)=>({
    type: ADDRETURN,
    payload:id,
});

export const addAllReturn=(product)=>({
    type: ADDALLRETURN,
    payload:product,
});

