import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";

type initialState = {
    filters: Record<string,boolean>
}

const initialState = {
    filters: {
        low:false,
        medium:false,
        urgent:false
    }
}

const taskSlice = createSlice ({
    name:'tasks',
    initialState,
    reducers: {
        changeFilter(state,action:PayloadAction<{
            low?:boolean,
            medium?:boolean,
            urgent?:boolean
        }>) {
            state.filters = {...state.filters, ...action.payload};
        }
    }
})

export const getFilters = (state:RootState) => state.tasks.filters;

export const {changeFilter} = taskSlice.actions;

export default taskSlice.reducer;