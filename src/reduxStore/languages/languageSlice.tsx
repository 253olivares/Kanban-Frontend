import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type initialStateType = {
    selectLang: string
    languages: string[]
}

const initialState: initialStateType = {
    selectLang: 'English',
    languages: ['English', 'Spanish']
}

const languageSlice = createSlice ({
    name: 'lang',
    initialState,
    reducers: {
        changeLanguage (state, action: PayloadAction<string>) {
            state.selectLang = action.payload;
        }
    }
})

export const getSelectLanguage = (state:RootState) => state.lang.selectLang;
export const getLanguages = (state:RootState) => state.lang.languages;

export const {changeLanguage} = languageSlice.actions;

export default languageSlice.reducer;