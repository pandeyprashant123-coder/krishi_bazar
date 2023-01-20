import React from 'react'
import Cauliflower from "../images/cauliflower.jpg"
import Nilesh from "../images/nilesh.jpg"

export const Product_detail = () => {
  return (
    <div className="subcontainer single-product">
        <div className="row">
            <div className="cols">
                <img src={Cauliflower} width="100%" id="product-img"/>
            </div>
            <div className="cols">
                <p>Home / Cauliflower</p>
                <h1>Cauliflower</h1>
                <h4>Rs :20/kg</h4>
                <select name="" id="">
                    <option value="">Select Quantity</option>
                    <option value="">small</option>
                    <option value="">Medium</option>
                    <option value="">Large</option>
                </select>
                <input type="number" value="1"/>
                <a href="#" className="btn">Add to cart</a>
                <h3>Product details</h3>
                <br/>
                
            </div>
        </div>
        <div className="farmer_produced">
            <h1 className="supplyer">
                Good Supplyer
            </h1>
            <div className="supplyer_card">
                    <img className='supplyer_img' src={Nilesh} alt="" />
                    <div className="supplyer_detail">
                        <h2 className="name">Yukesh Katwal</h2>
                        <h3 className="occupation">Cauliflower farmer</h3>
                        <h4 className="email">...@gmail.com</h4>
                        <h5 className="Phone Number"></h5>
                        <div className="rating">stars</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, numquam atque similique aliquam cum, dignissimos error adipisci corporis assumenda a repellendus porro dolore aliquid modi!</p>
                        <div className="coordinates">00000000</div>
                    </div>
            </div>
        </div>
    </div>
  )
}
