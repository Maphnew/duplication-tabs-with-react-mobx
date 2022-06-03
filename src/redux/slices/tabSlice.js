import { createSlice } from "@reduxjs/toolkit";

export const tabSlice = createSlice({
    name: "tabSlice",
    initialState: {
        id: "",
        name: "",
    },
    reducers: {
        setId: (state, action) => {
            state.id = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        }
    }
});

export const { setId, setName } = tabSlice.actions;
export default tabSlice.reducer;