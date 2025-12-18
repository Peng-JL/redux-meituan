import { createSlice } from "@reduxjs/toolkit";
import { clear } from "@testing-library/user-event/dist/clear";
import axios from "axios";
import { set } from "lodash";

const foodsStore = createSlice({
    name: "foods",
    initialState: {
        foodsList: [],
        activeIndex: 0,
        cartList: []
    },
    reducers: {
        setFoodsList: (state, action) => {
            state.foodsList = action.payload;
        },
        changeActiveIndex: (state, action) => {
            state.activeIndex = action.payload;
        },
        addCart(state, action) {
            const item = state.cartList.find(item => item.id === action.payload.id)
            if (item) {
                item.count++
            } else {
                state.cartList.push(action.payload)
            }
        },
        removeCart(state, action) {
            const item = state.cartList.find(item => item.id === action.payload.id)
            if (item.count > 1) {
                item.count--
            } else {
                state.cartList = state.cartList.filter(item => item.id !== action.payload.id)
            }
        },
        increCount(state, action) {
            const item = state.cartList.find(item => item.id === action.payload.id)
            item.count++
        },
        decreCount(state, action) {
            const item = state.cartList.find(item => item.id === action.payload.id)
            if (item.count === 1) {
                state.cartList = state.cartList.filter(item => item.id !== action.payload.id)
                return
            }
            item.count--
        },
        clearCart(state) {
            state.cartList = []
        }
    },
})

const { setFoodsList, changeActiveIndex, addCart, removeCart, increCount, decreCount, clearCart } = foodsStore.actions;
const fetchFoodsList = () => {
    return async (dispatch) => {
        const res = await axios.get("http://localhost:3004/takeaway");
        dispatch(setFoodsList(res.data));
        // console.log(res.data);
    }
}

export { fetchFoodsList, changeActiveIndex, addCart, removeCart, increCount, decreCount, clearCart }
const reducer = foodsStore.reducer;
export default reducer;