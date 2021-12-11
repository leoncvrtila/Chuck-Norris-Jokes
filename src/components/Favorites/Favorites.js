import React, { Fragment } from "react";
import heartRed from '../../assets/images/heart-red.png'
import LoadingSpinner from "../UI/LoadingSpinner";
import { useSelector, useDispatch } from "react-redux";
import { jokesActions } from "../../store/jokes"

const Favorites = () => {

    const dispatch = useDispatch();

    const jokesState = useSelector(state => state.jokes.jokes);

    const changeFavoriteStatus = (e, id) => {

        dispatch(jokesActions.changeJokesData(id))

    }

    const jokesMap = jokesState.map(item => {

        return (

            <Fragment key={item.id}>

                {
                    item.favorite ?

                    <div className="Joke" key={item.id}>

                    <p>{item.joke}</p>

                    <div className="FavoriteButton" onClick={(e) => {changeFavoriteStatus(e, item.id)}} >

                        <img alt="FavoriteFalse" src={heartRed} />

                    </div>

                    </div>

                    : null

                }

            </Fragment>

        )

    });

    return (

        <div className="Favorites">

            <h1>Favorite Jokes</h1>

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

export default Favorites;