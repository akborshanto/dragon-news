import React, { useState } from "react";
import Header from "../shared/headear/Header";
import Navbar from "../shared/navbar/Navbar";
import RightSide from "../shared/rightSideNav/RightSide";
import LeftSide from "../shared/leftSideNav/LeftSide";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from 'react-router-dom';
import NewsCard from "../shared/newsCard/NewsCard";

const Home = () => {
 // const[news,setNews]=useState([])
const news=useLoaderData()
console.log(news)
  return (
    <div className=" max-w-6xl mx-auto">
      <Header></Header>
      <Navbar></Navbar>
      <BreakingNews></BreakingNews>
      <h1 className=" text-red-400">homde</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="border">
          <RightSide></RightSide>
        </div>
      {/* mews midle section */}
        <div className="border">
    
{
  news.map(anews=><NewsCard anews={anews}></NewsCard>)
}

        
        </div>
        <div className="border">
          <LeftSide></LeftSide>
        </div>
      </div>
    </div>
  );
};

export default Home;
