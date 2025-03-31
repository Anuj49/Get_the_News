// Context creation
// Provider
// consumer lengthy remove it, use useContext hook

import React, {useContext, useReducer, useEffect, } from "react";
import reducer from "./Reducer";

let API = "https://hn.algolia.com/api/v1/search?"

const initialState ={
   isloading: true,
   query : "HTML",
   nbPages: 0,
   page: 0,
   hits:[],
}
const AppContext = React.createContext();

// create a provider function

const AppProvider = ({children})=>{
   // const [state, setState] = useState(initialState); 
const [state, dispatch] = useReducer(reducer, initialState);


  const fetchApiData = async(url)=>{

   dispatch({type:"SET_LOADING"})

    try{
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
         type:"GET_STORIES",
         payload:{
            hits:data.hits,
            nbPages:data.nbPages,
         },
      });

     // isloading = false;
    }catch(error){
      console.log(error);
    }
  };

  // To remove the post
  const removePost= (post_ID)=>{
    dispatch({
      type:"REMOVE_POST", 
      payload:post_ID
    });
  };

  // Call a Search function:-

  const searchPost = (searchQuery)=>{
    dispatch({
      type:"SEARCH_QUERY",
      payload:searchQuery,
    });
  }

  useEffect(()=>{
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  },[state.query]);

   return (
      <AppContext.Provider value={{...state, removePost, searchPost}}>
      {children}
      </AppContext.Provider>
   );
};

// custom hook creation
const useGlobalContext = ()=>{
  return useContext(AppContext);
};

export {AppContext, AppProvider, useGlobalContext};