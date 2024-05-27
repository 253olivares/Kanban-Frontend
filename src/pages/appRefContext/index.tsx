import { createContext, MutableRefObject, ReactElement, useRef } from "react";

export type contextType = {
    accountSettingsRef:MutableRefObject<HTMLDivElement|null>,
    modalRef:MutableRefObject<HTMLDivElement|null>,
    mobileSideBarRef:MutableRefObject<HTMLDivElement|null>,
    pageRef:MutableRefObject<HTMLDivElement|null>,
    filterRef:MutableRefObject<HTMLDivElement|null>,
    filterRefHead:MutableRefObject<HTMLDivElement|null>,
    profileRef:MutableRefObject<HTMLDivElement|null>
}

export const AppContext = createContext<contextType | null>(null);

export const AppProvider = ({children}: {children:ReactElement})=> {

    const accountSettingsRef = useRef<HTMLDivElement>(null);
    const profileRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    const mobileSideBarRef = useRef<HTMLDivElement>(null);

    const pageRef = useRef<HTMLDivElement>(null);

    const filterRef = useRef<HTMLDivElement>(null);
    const filterRefHead = useRef<HTMLDivElement>(null);

    const contextValues = {
        accountSettingsRef,
        modalRef,
        mobileSideBarRef,
        pageRef,
        filterRef,
        filterRefHead,
        profileRef
    }

    return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
}