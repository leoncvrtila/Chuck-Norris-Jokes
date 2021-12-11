import { configureStore } from '@reduxjs/toolkit'
import jokesReducer from './jokes'

const store = configureStore({

    reducer: {jokes: jokesReducer}
    
})

export default store