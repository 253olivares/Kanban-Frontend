import { configureStore } from '@reduxjs/toolkit'

import languageReducer from './languages/languageSlice';
import modalReducer from './modal/modalSlice';
import storageReducer from './localStorage/localStorageSlice';
import userReducer from './users/userSlice';
import taskReducer from './tasks/tasksSlice';
import workspaceReducer from './workspace/workspace';
import boardsReducer from './boards/boardsSlice';

export const store = configureStore({
    reducer: {
        storage: storageReducer,
        modal: modalReducer,
        lang: languageReducer,
        user: userReducer,
        tasks: taskReducer,
        workspace:workspaceReducer,
        boards: boardsReducer
    }
})
// type scripts we need for selectors and dispatch to comply with typescript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch