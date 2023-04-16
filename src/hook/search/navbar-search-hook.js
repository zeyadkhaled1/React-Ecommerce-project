import React from 'react'
import { useState,useEffect } from 'react'
import ViewSearchProductsHook from '../product/view-search-products-hook'

export const NavbarSearchHook = () => {
    const [,,,,getProductSearched]=ViewSearchProductsHook();
    const [searchWord, setSearchWord] = useState('')
    const onChangeSearch=(e)=>{
        localStorage.setItem("searchWord",e.target.value)
        setSearchWord(e.target.value)
        const path =window.location.pathname;
        if (path !=="/allproducts"){
            window.location.href="/allproducts"
        }
    }
    useEffect(() => {
        setTimeout(()=>{
            getProductSearched()
        },1000)
    }, [searchWord])
    return [onChangeSearch,searchWord]
}
