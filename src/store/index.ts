import { configureStore } from '@reduxjs/toolkit'
import navSlice from './navSlice'
import themeSlice from './themeSlice';

const store = configureStore({
    reducer: {
        nav: navSlice.reducer,
        theme: themeSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export default store;