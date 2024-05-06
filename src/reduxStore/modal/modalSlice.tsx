import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store";

// just a slice to control when our modals are open and which modals we want to open

type initialStateType = {
    openModal:boolean,
    modal: 'logIn' | 'createProfile' | 'profile' | ''
};

const initialState: initialStateType = {
        openModal: false,
        modal:''
    }

// create a slice of our state
const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
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
        closeModal (state) {
            // set our modal to blank and close our modal
            state.modal = '';
            state.openModal = false;
        }
    }
})

// get our state in redux
export const getModalStatus = (state:RootState) => state.modal.openModal;
export const getModalType = (state:RootState) => state.modal.modal;

export const {openLogin, closeModal, openCreateProfile} = modalSlice.actions;

export default modalSlice.reducer;