const reducer =(state, action)=>{
//    if(action.type="s")
   switch(action.type){
      
      case "SET_LOADING":
          return{
                    ...state,  // to hold the previous post as it is
                    isLoading:true,
          }
      case "GET_STORIES":
          return{
                  ...state,
                  isLoading:false,
                  hits:action.payload.hits,
          //         nbPages:action.payload.nbPages,
          };
     case "REMOVE_POST":
          return{
                    ...state,
                    hits:state.hits.filter((curElement)=>curElement.objectID !== action.payload),
          };    
     case "SEARCH_QUERY":
        return {
            ...state,
            query:action.payload,
        }
   }
 
          return state;
};

export default reducer;