import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi"
import { cryptoNewsApi } from "../services/cryptoNewsApi"
import { cryptoTestApi } from "../services/Test"

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath] : cryptoApi.reducer,    
        [cryptoNewsApi.reducerPath] : cryptoNewsApi.reducer,
        [cryptoTestApi.reducerPath] : cryptoTestApi.reducer
    }
})