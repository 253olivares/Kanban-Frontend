import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { addUserToHistoryCL, deleteUserHistoryCL, getUserHistory } from "../../customLogic/CustomLogic";
import { PayloadAction } from "@reduxjs/toolkit";


// just a slice to control when our modals are open and which modals we want to open

type initialStateType = {
    openModal:boolean,
    mobileModal:boolean,
    modal: 'logIn' |
     'createProfile' |
     'profile' |
     'deleteConfirm' | 
     'deleteConfirmBoard' | 
     'addNewUser' |
     'leaveWorkspace' |
     'changeBackground' |
     '',
    accountSettings:boolean,
    accountLandingMobile:boolean,
    croppingTool:boolean,
    croppingImageData:string | null,
    filterModal:boolean,
    memberModal:boolean,
    deleteWorkspace:boolean,
    settingsModal:boolean,
    addListModal:boolean,
    mobileBoardNameModal:boolean,
    userRoleName:boolean,
    userHistory:Record<string,string[]>,
    addUserEmail:string,
    addUserRole:string,
    previewSelect:number,
    addTaskInput:string,
    taskModal:boolean,
    selectTask:string
}

const initialState: initialStateType = {
    openModal: false,
    mobileModal:false,
    modal:'',
    accountSettings:false,
    accountLandingMobile:false,
    croppingTool:false,
    croppingImageData:null,
    filterModal: false,
    memberModal:false,
    deleteWorkspace: false,
    settingsModal: false,
    addListModal: false,
    mobileBoardNameModal:false,
    userRoleName:false,
    userHistory:{},
    addUserEmail:"",
    addUserRole:"",
    previewSelect:0,
    addTaskInput:"",
    taskModal:false,
    selectTask:""
}   

// create a slice of our state
const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setCroppingImageData(state,action){
            state.croppingImageData = action.payload;
        },
        openCloseCroppingTool(state){
          state.croppingTool = !state.croppingTool;  
        },
        openLogin (state) {
            // access state and set our modal to open and tell it we want our login
            state.modal = 'logIn';
            state.openModal = true;
        },
        openCreateProfile (state) {
            // set our modal to true and tell our application that we want to create profile modal
            state.modal= 'createProfile';
            state.openModal = true;
        },
        openProfile (state){
            // toggleModal();
            state.modal = 'profile';
            state.openModal = true;
        },
        openConfirmDelete (state) {
            state.modal = 'deleteConfirm';
            state.openModal = true;
        },
        openConfirmDeleteBoard (state) {
            state.modal = 'deleteConfirmBoard';
            state.openModal = true;
        },
        openLeaveWorkspace (state) {
            state.modal = 'leaveWorkspace';
            state.openModal = true;
        },
        openAddNewUser (state) {
            state.modal = 'addNewUser';
            state.openModal = true;
        },
        openChangeBackground(state){
            state.modal = "changeBackground";
            state.openModal = true;
        },
        closeModal (state) {
            if(state.modal == "addNewUser") {
                state.addUserEmail = "" ;
                state.addUserRole = "";
            }
            // set our modal to blank and close our modal
            state.modal = '';
            state.openModal = false;
        },
        openMobileModal(state){
            state.mobileModal = true;
        },
        closeMobileModal(state){
            state.mobileModal = false;
        },
        openAccountModal(state) {
            state.accountSettings = true;
        },
        closeAccountModal(state){
            state.accountSettings = false;
        },
        openAccountLadingModal(state){
            state.accountLandingMobile = true;
        },
        closeAccountLandingModal(state){
            state.accountLandingMobile = false;
        },
        setOpenModal (state, action){
            state.filterModal = action.payload as boolean;
        },
        setOpenMemberModal (state,action) {
            state.memberModal = action.payload as boolean;
        },
        setSettingModal (state,action) {
            state.settingsModal = action.payload as boolean;
        },
        changeListModalState (state,action) {
            state.addListModal = action.payload as boolean;
        },
        changeMobileBoardNameState (state,action){
            state.mobileBoardNameModal = action.payload as boolean;
        },
        changeUserRoleNameState (state,action) {
            if(state.userRoleName == true) {
                state.addUserRole = "";
            }
            state.userRoleName = action.payload as boolean;
        },
        initializeUserHistory (state,action) {
            const userHistoryData = getUserHistory(action.payload);

            if(userHistoryData) state.userHistory = userHistoryData;
        },
        addUserHistoryToState (state,action:PayloadAction<{user:Record<string,string[]>,boardId:string}>) {

            state.userHistory = {...state.userHistory,...action.payload.user};
            addUserToHistoryCL(state.userHistory,action.payload.boardId);
        },
        deleteUserHistory (state,action:PayloadAction<string>) {
            state.userHistory = {};
            deleteUserHistoryCL(action.payload)
        },
        addUserEmail(state,action:PayloadAction<string>){
            state.addUserEmail = action.payload;
        },
        setAddUserRole(state,action:PayloadAction<string>){
            state.addUserRole = action.payload;
        },
        setPreview (state,action:PayloadAction<number>) {
            state.previewSelect = action.payload;
        },
        setAddTaskInput (state,action:PayloadAction<string>) {
            state.addTaskInput = action.payload;
        },
        changeTaskModal (state,action:PayloadAction<boolean>) {
            state.taskModal = action.payload;
        },
        setSelectTask (state,action:PayloadAction<string>){
            state.selectTask = action.payload;
        }
    }
})

// get our state in redux
export const getModalStatus = (state:RootState) => state.modal.openModal;
export const getMobileModal = (state:RootState) => state.modal.mobileModal;
export const getModalType = (state:RootState) => state.modal.modal;
export const getAccountSettings = (state:RootState) => state.modal.accountSettings;
export const getAccountLandingModal = (state:RootState) => state.modal.accountLandingMobile;
export const getCroppingTool = (state:RootState) => state.modal.croppingTool;
export const getCroppingImage = (state:RootState) => state.modal.croppingImageData;
export const getFilterModal = (state:RootState) => state.modal.filterModal;
export const getDeleteWorkspace = (state:RootState) => state.modal.deleteWorkspace;
export const getMembersModal = (state:RootState) => state.modal.memberModal;
export const getSettingsModal = (state:RootState) => state.modal.settingsModal;
export const getListModal = (state:RootState) => state.modal.addListModal;
export const getMobileBoardNameModal = (state:RootState) => state.modal.mobileBoardNameModal;
export const getRolState = (state:RootState) => state.modal.userRoleName;
export const getUserHistoryState = (state:RootState) => state.modal.userHistory;
export const getAddUserEmail = (state:RootState) => state.modal.addUserEmail;
export const getUserRole = (state:RootState) => state.modal.addUserRole;
export const getPreviewSelect = (state:RootState) => state.modal.previewSelect;
export const getAddTaskInput = (state:RootState) => state.modal.addTaskInput;
export const getTaskModal = (state:RootState) => state.modal.taskModal;
export const getSelectTaskId = (state:RootState) => state.modal.selectTask;

export const {
    setCroppingImageData,
    openCloseCroppingTool,
    openLogin, 
    closeModal, 
    openCreateProfile, 
    openProfile, 
    openMobileModal, 
    closeMobileModal, 
    openConfirmDelete,
    openAccountModal, 
    closeAccountModal,
    openAccountLadingModal,
    closeAccountLandingModal,
    setOpenModal,
    setOpenMemberModal,
    setSettingModal,
    changeListModalState,
    changeMobileBoardNameState,
    openConfirmDeleteBoard,
    openAddNewUser,
    changeUserRoleNameState,
    initializeUserHistory,
    addUserHistoryToState,
    openLeaveWorkspace,
    deleteUserHistory,
    addUserEmail,
    setAddUserRole,
    openChangeBackground,
    setPreview,
    setAddTaskInput,
    changeTaskModal,
    setSelectTask
} = modalSlice.actions;

export default modalSlice.reducer;