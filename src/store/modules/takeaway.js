import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { set } from "lodash";

const foodsStore = createSlice({
    name: "foods",
    initialState: {
        foodsList: []
        // tabList: [],
    },
    reducers: {
        setFoodsList: (state, action) => {
            state.foodsList = action.payload;
        }
        // setTabList: (state, action) => {
        //     state.tabList = action.payload;
        // }
    },
})

const { setFoodsList } = foodsStore.actions;
const fetchFoodsList = () => {
    return async (dispatch) => {
        const res = await axios.get("http://localhost:3004/takeaway");
        dispatch(setFoodsList(res.data));
        // console.log(res.data);
    }
}
// const fetchTabsList = () => {
//     return async (dispatch) => {
//         const res = await axios.get("http://localhost:3004/takeaway");
//         dispatch(setTabList(res.data));
//     }
// }

export { fetchFoodsList}
const reducer = foodsStore.reducer;
export default reducer;