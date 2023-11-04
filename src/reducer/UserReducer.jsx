import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../User Data/UserData";
const userSlice = createSlice ({
    name: "users",
    initialState: UserData,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },

        updateUser: (state, action) => {
            const {id, name, email} = action.payload;
            const updatingUser = state.find(user => user.id == id);

            if(updatingUser){
                updatingUser.name = name;
                updatingUser.email = email;
            }
        },

        deleteUser: (state, action) => {
            const {id} = action.payload;
            const updatingUser = state.find(user => user.id == id);

            if(updateUser) {
                return state.filter ( f => f.id !== id)
            }
        }
       
    }
})

export const {addUser, updateUser, deleteUser} = userSlice.actions
export default userSlice.reducer;