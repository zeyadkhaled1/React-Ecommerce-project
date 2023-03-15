import { GET_ALL_CATEGORY } from "../Type"
const initial={
    category:[],
    loading:true,
}
export const categoryReducer=(state=initial,action)=>{
    switch(action.type)
    {
        case GET_ALL_CATEGORY:
            return{
                ...state,
                category:action.payload,
                loading:false,
            }
        default:
            return state
    }
}