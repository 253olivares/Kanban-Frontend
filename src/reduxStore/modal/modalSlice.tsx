import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


// just a slice to control when our modals are open and which modals we want to open

type initialStateType = {
    openModal:boolean,
    mobileModal:boolean,
    modal: 'logIn' | 'createProfile' | 'profile' | 'deleteConfirm' | '',
    accountSettings:boolean,
    accountLandingMobile:boolean,
    croppingTool:boolean,
    croppingImageData:string | null,
    filterModal:boolean,
    memberModal:boolean,
    deleteWorkspace:boolean,
    settingsModal:boolean
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
    settingsModal: false
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
        closeModal (state) {
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
    setSettingModal
} = modalSlice.actions;

export default modalSlice.reducer;