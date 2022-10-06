import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: {},
        isLoggedin: false
    },
    reducers: {
        clearUser: (state) => {
            state.value = {}
            state.isLoggedin =  false
        },
        setValue: (state, action) => {
            state.value = action.payload
            state.isLoggedin =  true
        },
    },
})
// Action creators are generated for each case reducer function
export const { setValue, clearUser } = userSlice.actions
export default userSlice.reducer