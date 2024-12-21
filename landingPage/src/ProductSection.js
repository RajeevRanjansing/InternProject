import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ProductSection=()=>{

    return(
        <>
            <div className="Product">

                <div className="RiceItem">
                    <div className="Rice">List of Item</div>
                    
                    {/* --------RiceList--------- */}
                    <div className="RiceList">
                        <div className="image1">

                        </div>
                        <h2>Rice Section</h2>
                        </div>

                        <div className="RiceList">
                        <div className="image2">

                        </div>
                        <h2>Pulse Section</h2>
                        </div>

                        <div className="RiceList">
                        <div className="image3">

                        </div>
                        <h2>Sugar Section</h2>
                        </div>

                        <div className="RiceList">
                        <div className="image4">

                        </div>
                        <h2>Salt Section</h2>
                        </div>

                        <div className="RiceList">
                        <div className="image5">

                        </div>
                        <h2>Oil Section</h2>
                        </div>

                        <div className="RiceList">
                        <div className="arrow">
                        <FaArrowRight />
                        </div>
                        </div>

                    
                </div>
            </div>
        </>
    )
}
export default ProductSection;