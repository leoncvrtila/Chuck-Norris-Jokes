import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    jokes: [] 
}

const jokesSlice = createSlice({
    name: 'jokes',
    initialState: initialState,
    reducers: {
        setJokes (state, action) {

            let newData = [];

            for (let key in action.payload.value) {

                newData.push({
                    ...action.payload.value[key],
                    favorite: false
                })

            }

            state.jokes = [...newData];

        },
        changeJokesData (state, action) {

            let clickedNumber = action.payload;

            for (let key in state.jokes) {

                if (state.jokes[key].id === clickedNumber) {      
                    
                    if (state.jokes[key].favorite) {

                        state.jokes[key].favorite = false;

                    } else {

                        state.jokes[key].favorite = true;

                    }

                }

            }

        }
    }
})

export const jokesActions = jokesSlice.actions

export default jokesSlice.reducer