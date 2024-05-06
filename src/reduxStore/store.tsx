import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './modal/modalSlice';
import langaugeReducer from './languages/languageSlice';
import userReducer from './users/userSlice';

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        lang: langaugeReducer,
        user: userReducer
    }
})
// type scripts we need for selectors and dispatch to comply with typescript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch