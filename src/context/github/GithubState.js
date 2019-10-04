import React,{useReducer} from 'react';
import GithubReducer from './GithubReducer';
import GithubContext from './githubContext';
import axios from 'axios';
import {
    SEARCH_USER,
    CLEAR_USERS,
    SET_LOADING
} from '../types'

const GithubState = props => {
    const initialState = {
        users:[],
        loading:false
    }

    const [state,dispatch] = useReducer(GithubReducer,initialState);

    //get user
    
 const callMeforOne = async (user) =>{
   setLoading();
    const res = await axios.get(`https://api.github.com/search/users?q=${user}`);
    console.log(res.data.items);


    dispatch({
        type:SEARCH_USER,
        payload: res.data.items
    });

   }

    //clear users
    const clearUser = () => dispatch({type:CLEAR_USERS})
   //set loading
    const setLoading = () => dispatch({type:SET_LOADING})


  


    return <GithubContext.Provider 
        value={{
            users: state.users,
            loading: state.loading,
            callMeforOne,
            setLoading,
            clearUser
        }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;