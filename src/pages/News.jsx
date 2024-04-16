// import React from 'react';

import { useParams } from "react-router-dom";
import Header from "./shared/Header";
import RightSideNav from "./shared/RightSideNav";
import Navbar from "./shared/Navbar";

const News = () => {
    const { id } = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3" >
                    <h2 className="text-5xl">news d</h2>
                    <p> {id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;