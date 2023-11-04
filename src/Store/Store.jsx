import { configureStore } from '@reduxjs/toolkit'
import UserReducer from '../reducer/UserReducer';

const store  = configureStore({
    reducer:{
        users: UserReducer
    }
});

export default store
