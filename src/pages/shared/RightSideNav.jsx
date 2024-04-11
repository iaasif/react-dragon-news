// import React from 'react';
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'



const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-4 mb-6">
                <h2 className="text-2xl">login with</h2>
                <button className="btn btn-outline w-full">
                    login with
                    <FaGoogle className="text-xl" />
                </button>

                <button className="btn btn-outline w-full">
                    login with
                    <FaGithub className="text-xl" />
                </button>
            </div>
            <div className="p-4  mb-6">
                <h2 className="text-2xl">find us on </h2>
                <a href="" className="p-4 flex items-center space-x-2 text-lg
                border  
                rounded-t-lg    
                ">
                    <FaFacebook className=""></FaFacebook>

                    <span>facebook</span>
                </a>
                <a href="" className="p-4 flex items-center space-x-2 text-lg
                border-x
                   
                ">
                    <FaTwitter className=""></FaTwitter>

                    <span>Twitter</span>
                </a>
                <a href="" className="p-4 flex items-center space-x-2 text-lg
                border  
                rounded-b-lg    
                ">
                    <FaInstagram className=""></FaInstagram>

                    <span>Instagram</span>
                </a>
            </div>

            {/* q zone  */}

            <div className="p-4 space-y-4 mb-6">
                <h2 className="text-2xl">qzone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />

            </div>
        </div>
    );
};

export default RightSideNav;