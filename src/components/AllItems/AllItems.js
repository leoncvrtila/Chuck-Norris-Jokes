import React from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import heartRed from '../../assets/images/heart-red.png'
import heartTransparent from '../../assets/images/heart-transparent.png'
import { useSelector, useDispatch } from "react-redux";
import { jokesActions } from "../../store/jokes"

const AllItems = () => {

    const dispatch = useDispatch();

    const jokesState = useSelector(state => state.jokes.jokes);

    const changeFavoriteStatus = (e, id) => {

        dispatch(jokesActions.changeJokesData(id))

    }

    const jokesMap = jokesState.map(item => {

        return (

            <div className="Joke" key={item.id}>

                <p>{item.joke}</p>

                <div className="FavoriteButton" onClick={(e) => {changeFavoriteStatus(e, item.id)}} >
                    {
                        
                        item.favorite ? 

                        <img alt="FavoriteTrue" src={heartRed} />

                        :

                        <img alt="FavoriteFalse" src={heartTransparent} />

                    }
                </div>

            </div>

        )

    });

    return (

        <div className="AllItems">

            <h1>All Chuck Norris Jokes</h1>

            <div className="AllJokes">

                {
                    
                    jokesState.length === 0 ?

                    <LoadingSpinner />

                    :

                    jokesMap
                    
                }

            </div>

        </div>

    )

}

export default AllItems;