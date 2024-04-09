import { configureStore } from '@reduxjs/toolkit'
import modalReducer from '../modals/modalSlice'

export const store = configureStore({
    reducer: {
        modal: modalReducer
    }
})
// type scripts we need for selectors and dispatch to comply with typescript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch