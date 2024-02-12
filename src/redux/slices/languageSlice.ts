import { createSlice , PayloadAction } from "@reduxjs/toolkit";

interface LocalizationState {
    locale: 'en' | 'hindi';
  }
  const initialState: LocalizationState = {
    locale: 'en',
  };
  
export const languageSlice= createSlice({
    name:"language",
    initialState,
    reducers:{
        setLanguage:(state, action: PayloadAction<'en' | 'hindi'>)=>{
            state.locale = action.payload;
        },

    },
});
export const {setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
