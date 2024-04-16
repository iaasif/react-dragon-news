// import React from 'react';

import { useLoaderData } from "react-router-dom";
import BreakingNews from "./BreakingNews";
import Header from "./shared/Header";
import LeftSideNav from "./shared/LeftSideNav";
import Navbar from "./shared/Navbar";
import RightSideNav from "./shared/RightSideNav";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData();
    console.log(news);


    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>



            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className=""><LeftSideNav></LeftSideNav></div>
                <div
                    className="md:col-span-2 "
                >
                    {
                        news.map(aNews => <NewsCard key={aNews.id} news={aNews}></NewsCard>)
                    }

                    <h2 className="text-2xl ">new is comming </h2> </div>
                <div className="" ><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;