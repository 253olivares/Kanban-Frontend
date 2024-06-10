import { configureStore } from '@reduxjs/toolkit'

import languageReducer from './languages/languageSlice';
import modalReducer from './modal/modalSlice';
import storageReducer from './localStorage/localStorageSlice';
import userReducer from './users/userSlice';
import taskReducer from './tasks/tasksSlice';
import workspaceReducer from './workspace/workspaceSlice';
import boardsReducer from './boards/boardsSlice';
import listReducer from './lists/listsSlice';
import commentReducer from './comments/commentsSlice';

export const store = configureStore({
    reducer: {
        storage: storageReducer,
        modal: modalReducer,
        lang: languageReducer,
        user: userReducer,
        tasks: taskReducer,
        workspace:workspaceReducer,
        boards: boardsReducer,
        list:listReducer,
        comments:commentReducer
    }
})
// type scripts we need for selectors and dispatch to comply with typescript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch