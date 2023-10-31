import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mode: 'dark'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(state, action) {
            state.mode = action.payload
        }
    }
})

export const themeActions = themeSlice.actions;
export default themeSlice