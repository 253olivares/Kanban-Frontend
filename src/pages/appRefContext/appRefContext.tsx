import { createContext, MutableRefObject, ReactElement, useRef } from "react";

export type contextType = {
    accountSettingsRef:MutableRefObject<HTMLDivElement|null>,
    modalRef:MutableRefObject<HTMLDivElement|null>,
    mobileSideBarRef:MutableRefObject<HTMLDivElement|null>,
    pageRef:MutableRefObject<HTMLDivElement|null>,
    filterRef:MutableRefObject<HTMLDivElement|null>,
    filterRefHead:MutableRefObject<HTMLDivElement|null>,
    profileRef:MutableRefObject<HTMLDivElement|null>,
    filterModalRef:MutableRefObject<HTMLDivElement|null>,
    closeFilterModal:MutableRefObject<HTMLButtonElement|null>,
    openSpaceModal:MutableRefObject<HTMLDivElement|null>,
    newWorkspaceModal:MutableRefObject<HTMLDivElement|null>,
    newWorkspaceModalClose:MutableRefObject<HTMLDivElement|null>,
    workspaceModalArrow:MutableRefObject<HTMLDivElement|null>,
    mobileAddNewWorkspace:MutableRefObject<HTMLDivElement | null>,
    newAddBoard:MutableRefObject<HTMLDivElement | null>,
    filterRefHead2:MutableRefObject<HTMLDivElement | null>,
    membersRefHead:MutableRefObject<HTMLDivElement | null>,
    filterBodyRef:MutableRefObject<HTMLDivElement | null>,
    memberBodyRef:MutableRefObject<HTMLDivElement | null>,
    settingsRef:MutableRefObject<HTMLImageElement | null>,
    settingsBodyRef:MutableRefObject<HTMLDivElement | null>,
    addNewListNameRef: MutableRefObject<HTMLDivElement | null>,
    mobileMembersRef:MutableRefObject<HTMLDivElement | null>,
    settingsModalArrowRef:MutableRefObject<HTMLDivElement | null>,
    addRoleRef:MutableRefObject<HTMLDivElement | null>,
    closeListSettings:MutableRefObject<HTMLImageElement | null>,
    deleteListRef:MutableRefObject<HTMLDivElement | null> ,
    addListTask:MutableRefObject<HTMLButtonElement | null>,
    addListTaskSubmit:MutableRefObject<HTMLButtonElement | null>,
    addNewTaskNameRef:MutableRefObject<HTMLDivElement | null>,
    taskMiniModal:MutableRefObject<HTMLDivElement | null>,
    reactionButton:MutableRefObject<HTMLDivElement | null>
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
    const filterModalRef = useRef<HTMLDivElement>(null);
    const closeFilterModal  = useRef<HTMLButtonElement>(null);

    const openSpaceModal = useRef<HTMLDivElement>(null);
    const newWorkspaceModal = useRef<HTMLDivElement>(null);
    const newWorkspaceModalClose = useRef<HTMLDivElement>(null);
    const workspaceModalArrow = useRef<HTMLDivElement>(null);
    const mobileAddNewWorkspace = useRef<HTMLDivElement>(null);

    const newAddBoard = useRef<HTMLDivElement>(null);

    const filterRefHead2 = useRef<HTMLDivElement>(null);
    const filterBodyRef = useRef<HTMLDivElement>(null);

    const membersRefHead = useRef<HTMLDivElement>(null);
    const memberBodyRef = useRef<HTMLDivElement>(null);

    const settingsRef = useRef<HTMLImageElement>(null);
    const settingsBodyRef = useRef<HTMLDivElement>(null);

    const addNewListNameRef = useRef<HTMLDivElement>(null);

    const mobileMembersRef = useRef<HTMLDivElement>(null);

    const settingsModalArrowRef = useRef<HTMLDivElement>(null);

    const addRoleRef = useRef<HTMLDivElement>(null);

    const closeListSettings = useRef<HTMLImageElement>(null);
    const deleteListRef = useRef<HTMLDivElement>(null);

    const addListTask = useRef<HTMLButtonElement>(null);
    const addListTaskSubmit = useRef<HTMLButtonElement>(null);

    const addNewTaskNameRef = useRef<HTMLDivElement>(null);

    const taskMiniModal = useRef<HTMLDivElement>(null);

    const reactionButton = useRef<HTMLDivElement>(null);

    const contextValues = {
        accountSettingsRef,
        modalRef,
        mobileSideBarRef,
        pageRef,
        filterRef,
        filterRefHead,
        profileRef,
        filterModalRef,
        closeFilterModal,
        openSpaceModal,
        newWorkspaceModal,
        newWorkspaceModalClose,
        workspaceModalArrow,
        mobileAddNewWorkspace,
        newAddBoard,
        filterRefHead2,
        membersRefHead,
        filterBodyRef,
        memberBodyRef,
        settingsRef,
        settingsBodyRef,
        addNewListNameRef,
        mobileMembersRef,
        settingsModalArrowRef,
        addRoleRef,
        closeListSettings,
        deleteListRef,
        addListTask,
        addListTaskSubmit,
        addNewTaskNameRef,
        taskMiniModal,
        reactionButton
    }

    return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
}