import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store";

// just a slice to control when our modals are open and which modals we want to open

type initialStateType = {
    openModal:boolean,
    mobileModal:boolean,
    modal: 'logIn' | 'createProfile' | 'profile' | '',
    accountSettings:boolean,
    accountLandingMobile:boolean,
    croppingTool:boolean,
    croppingImageData:string | null
}

const initialState: initialStateType = {
    openModal: false,
    mobileModal:false,
    modal:'',
    accountSettings:false,
    accountLandingMobile:false,
    croppingTool:false,
    croppingImageData:null
}   

// create a slice of our state
const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
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
            state.modal = 'profile';
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

export const {
    openCloseCroppingTool,
    openLogin, 
    closeModal, 
    openCreateProfile, 
    openProfile, 
    openMobileModal, 
    closeMobileModal, 
    openAccountModal, 
    closeAccountModal,
    openAccountLadingModal,
    closeAccountLandingModal
} = modalSlice.actions;

export default modalSlice.reducer;