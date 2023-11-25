import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./Redux/addToCart";
// import favoritereducer from "./redux/favorite";
export default configureStore({
    reducer:  {
        Cart: cartreducer
    }
});