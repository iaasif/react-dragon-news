// import React from 'react';

import BreakingNews from "./BreakingNews";
import Header from "./shared/Header";
import LeftSideNav from "./shared/LeftSideNav";
import Navbar from "./shared/Navbar";
import RightSideNav from "./shared/RightSideNav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>



            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border"><LeftSideNav></LeftSideNav></div>
                <div
                className="md:col-span-2 border"
                ><h2 className="text-2xl ">new is comming </h2> </div>
                <div className="border" ><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;