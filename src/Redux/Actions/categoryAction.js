import { GET_ALL_CATEGORY,GET_ERROR } from "../Type";
import { useGetData } from "../../Hooks/useGetData";
export const getAllCategory=()=>{
    return async (dispatch)=>{
        try{ 
            const response= await useGetData('/api/category?pageNumber=1&pageSize=10')
            dispatch({type:GET_ALL_CATEGORY,payload:response.categories,pages:response.remainingCategories})
        }
        catch(e){
            dispatch({
                type:GET_ERROR,
                payload:"ERROR" + e
            })
        }
    }
}  