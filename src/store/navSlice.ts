import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    active: 'about',
    showMenu: false,
    scrollTo: ''
}

const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        activate(state, action) {
            state.active = action.payload
        },
        toggleMenu(state) {
            state.showMenu = !state.showMenu
        },
        openMenu(state, action) {
            state.showMenu = action.payload
        },
        scrollTo(state, action) {
            state.scrollTo = action.payload
        }
    }
})

export const navActions = navSlice.actions
export default navSlice