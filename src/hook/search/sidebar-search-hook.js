import {useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory, getMainCategory} from '../../Redux/Actions/categoryAction';
import { getAllBrand } from '../../Redux/Actions/brandAction';
import ViewSearchProductsHook from '../product/view-search-products-hook';

export const SidebarSearchHook = () => {
  const [,,,,getProductSearched]=ViewSearchProductsHook();
    const dispatch=useDispatch();
    useEffect(() => {
        const Get =async()=>{
          dispatch(getMainCategory());
          dispatch(getAllBrand());
          dispatch(getAllCategory(`?catArr=true`))
        }
    Get();
    },[])
    const allCat=useSelector(state => state.allCategory.mainCategory)
    const allBrand=useSelector(state => state.allBrand.brands)
    const allCatWithSub=useSelector(state => state.allCategory.categories)
    let category = allCat.data ? allCat.data.categories : [];
    let brand = allBrand.data ? allBrand.data.brands : [];
    let CatWithSub = allCatWithSub.data ? allCatWithSub.data.categories : {};
 
    let queryBrand=""
    let newArray=[]
    const [brandChecked,setBrandChecked]=useState([]);
    const ClickBrand=(e)=>{
      let value = e.target.value;
      if (value ==='0') {
              setBrandChecked([])
            }
      else if (e.target.checked === true) {
                setBrandChecked([...brandChecked,value])
              }
      else if (e.target.checked === false){
                newArray=brandChecked.filter((e)=>e!==value)
                setBrandChecked(newArray)
              }
    }

    useEffect(() => {
      queryBrand=brandChecked.join(",")
      // if (queryBrand !==""){
        localStorage.setItem("brandChecked",queryBrand)
      // }
      setTimeout(()=>{
        getProductSearched()
      },1000)
    }, [brandChecked])

    const [SubCategoriesidState,setSubCategoriesidState]=useState([]);
    const searchCat=(id)=>{
      id !=='0'?setSubCategoriesidState(id):setSubCategoriesidState([])
      localStorage.setItem("Categoryid",id!=='0'?id:'')
    }
    useEffect(()=>{
      setTimeout(()=>{
        getProductSearched()
      },1000)
    },[SubCategoriesidState])

    const [From,setPriceFrom]=useState(0)
    const [To,setPriceTo]=useState(0)

    const priceFrom=(e)=>{
      let priceContained = isNaN(parseInt(e.target.value)) ? 0 : Math.max(0, parseInt(e.target.value));
      localStorage.setItem("priceFrom",priceContained)
      setPriceFrom(e.target.value)
    }
    const priceTo=(e)=>{
      let priceContained = isNaN(parseInt(e.target.value)) ? 0 : Math.max(0, parseInt(e.target.value));
      localStorage.setItem("priceTo",priceContained)
      setPriceTo(e.target.value)
    }
    useEffect(()=>{
      setTimeout(()=>{
        getProductSearched()
      },1000)
    },[From,To])
    return [category,brand,CatWithSub,searchCat,ClickBrand,priceFrom,priceTo];
}
