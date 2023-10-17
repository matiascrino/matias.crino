import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false,
        experienceId: 0
    },
    reducers: {
        onOpenDateModal: (state, {payload}) => {
            state.isDateModalOpen = true;
            state.experienceId = payload;
        },
        onCloseDateModal: (state) => {
            state.isDateModalOpen = false;
            state.experienceId = 0;
        }
    }
});


// Action creators are generated for each case reducer function
export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;