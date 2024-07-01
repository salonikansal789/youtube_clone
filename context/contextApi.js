import React,{createContext,useState,useEffect} from 'react';
import { fetchDataFromApi } from '../utils/api';

export const context = createContext();

export const AppContext=(props)=>{
    const [loading,setLoading]=useState(false);
    const [searchResults,setSearchResults]=useState([]);
    const [mobileMenu,setMobileMenu]=useState(false);
    const [selectedCategory,setSelectCategory]=useState('New');
    useEffect(() => {
         fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(( {contents}) => {
            
            console.log(contents);
             setSearchResults(contents);
            setLoading(false);
        });
    };

return(
    <context.Provider value={{loading,setLoading,searchResults,setSearchResults,selectedCategory,setSelectCategory,mobileMenu,setMobileMenu}}>
        {props.children}
    </context.Provider>
)
}