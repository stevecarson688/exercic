import React from "react";


const navbar = ({setShow}) => {
    return (
        <nav>
            <div className="nav_box">
                <span className="my_shop" onClick={() =>setShow(true)}>My Shop</span>
                <div className="cart" onClick={()=>setShow(false)}>
                    <span>

                    </span>
                    <span>
                        0
                    </span>

                </div>
            </div>
        </nav>
    )
}




export default navbar;