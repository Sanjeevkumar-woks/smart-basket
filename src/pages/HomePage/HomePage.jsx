import React from 'react'
import Banner from '../../components/Banner/Banner'
import { MainCategoryList } from './components/MainCategoryList/MainCategoryList'


export default function Home() {
  return (
    <div className="HomePageContainer">
        <Banner/>
        <MainCategoryList/>  
          
    </div>
  )
}
