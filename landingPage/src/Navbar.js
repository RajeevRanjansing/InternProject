import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";


const Navbar=()=>{

    return(
        <>
        <div className="navSection">

        {/* --------------General Store-------------- */}
            <div className="navbar">
                <h1>GENERAL STORE</h1>
            </div>

            {/* --------------ul li --------------- */}
            <div className="tagList">
                <div className="tag">
                    <ul>
                        <li>Home</li>
                        <li>Products</li>

                        <li>Offers
                        <div className="offer">
                            <ul>
                                <li>Get 5% Extra <br />Off on every<br /> Item</li>
                            </ul>
                        </div>
                        </li>

                        <li><FaCartShopping />Cart</li>
                        
                        <li>Contact Us
                        <div className="contact">
                            <ul>
                                <li><FaLocationDot /> Gujarat</li>
                                <li><FaPhone /> 9009000090</li>
                                <li><FaWhatsapp /> Whatsapp</li>
                                <li><FaInstagram /> Instagram</li>
                                <li><MdOutlineMail /> mail</li>
                            </ul>
                        </div>
                        </li>
                        
                        <li>Login</li>
                    </ul>
                </div>
            </div>


            {/* ------------Image------------- */}
            <div className="heroImage">
                <h1>🙋‍♂️ A Good Taste will Change your Thought 🤔</h1>
            </div>

        </div>    

        </>
    )
}

export default Navbar;