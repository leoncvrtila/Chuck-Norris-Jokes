import React, {Suspense, useEffect} from "react";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import AllItems from "./components/AllItems/AllItems";
import Favorites from "./components/Favorites/Favorites";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import { useDispatch } from "react-redux";
import { fetchJokesData } from '../src/store/jokes-actions';

function App() {


  const dispatch = useDispatch();

  useEffect(()=>{

    dispatch(fetchJokesData())

  }, [dispatch])


  return (
    
    <Layout>

    <Suspense fallback={<LoadingSpinner/>}>

      <Routes>

        <Route path='/' exact element={<AllItems />} />
          
        <Route path='/favorites' exact element={<Favorites />} />
          
        <Route path='*' element={<h1>Page not found!</h1>} />

      </Routes>

    </Suspense>

  </Layout>
    
  );
}

export default App;
