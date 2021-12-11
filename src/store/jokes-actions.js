import { jokesActions } from "./jokes"

export const fetchJokesData = () => {

    return async dispatch => {

        const fetchData = async () => {

            const response = await fetch('http://api.icndb.com/jokes')

            if(!response.ok){
                throw new Error('Could not fetch data!')
            }

            const data = await response.json()

            return data

        }

        try{

           const jokesData = await fetchData()

           dispatch(jokesActions.setJokes(jokesData))

        } catch (error) {



        }
    }
}
