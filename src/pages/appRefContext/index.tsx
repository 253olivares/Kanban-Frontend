import { createContext, MutableRefObject, ReactElement, useRef } from "react";

export type contextType = {
    accountSettingsRef:MutableRefObject<HTMLDivElement|null>,
    modalRef:MutableRefObject<HTMLDivElement|null>
}

export const AppContext = createContext<contextType | null>(null);

export const AppProvider = ({children}: {children:ReactElement})=> {

    const accountSettingsRef = useRef<HTMLDivElement>(null);

    const modalRef = useRef<HTMLDivElement>(null);

    const contextValues = {
        accountSettingsRef,
        modalRef
    }

    return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
}