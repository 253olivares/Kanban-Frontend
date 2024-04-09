import { useDispatch, useSelector } from "react-redux"
import { TypedUseSelectorHook } from "react-redux"
import { AppDispatch, RootState } from "./store"


// create custom hooks that we can use to access our state
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector