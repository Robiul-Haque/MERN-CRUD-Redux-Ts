import { createSlice } from "@reduxjs/toolkit";

type TCrudState = {
    toggle: boolean
}

const initialState: TCrudState = {
    toggle: false,
}

const crudSlice = createSlice({
    name: "crud",
    initialState,
    reducers: {
        setToggle: (state, action) => {
            state.toggle = action.payload;
        },
    }
});


export const { setToggle } = crudSlice.actions;

export default crudSlice.reducer;