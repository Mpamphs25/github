import { 
    SEARCH_USER,
    SET_LOADING,
    CLEAR_USERS,
  

} from '../types';


export default (state,action) => {
    switch(action.type){
        case SEARCH_USER:
            return{
                ...state,
                users:action.payload,
                loading:false
            }
        case SET_LOADING: 
            return{
                ...state,
                loading:true
            }
        case CLEAR_USERS:
            return{
            ...state,
            users:[],
            loading:false
        }

        default:return state;
    }
}