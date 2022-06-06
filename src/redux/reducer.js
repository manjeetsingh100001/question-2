import { actionTypes } from "./action";

const initState = {
    isLoading: false ,
    isError: false ,
    data:[]
};

function reducer(state = initState, action) {
    // write code here
    switch(action.type){
        case actionTypes.ADD_USER_REQUEST :{
          return{
            ...state,
            isLoading: true,
            isError: false
          }
        }
        case actionTypes.ADD_USER_SUCCESS:{
            return{
                ...state,
                isLoading: false,
                data: payload.data
              }

        }case actionTypes.ADD_USER_FAILURE:{
            return{
                ...state,
                isLoading: false,
                isError: true
              }

        }
        default :return state
    }
}

export default reducer;
