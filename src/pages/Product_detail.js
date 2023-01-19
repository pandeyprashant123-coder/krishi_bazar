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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, numquam atque similique aliquam cum, dignissimos error adipisci corporis assumenda a repellendus porro dolore aliquid modi!</p>
            </div>
        </div>
        <div className="available_farmers">
            <h1 className="available">
                Available Farmers
            </h1>
            <div className="farmer_cards">
                <div className="farmer_card">
                    <img className='farmer_img' src={Nilesh} alt="" />
                    <div className="farmer_detail">
                        <h3 className="name">Yukesh Katwal</h3>
                        <h5 className="occupation">Cauliflower farmer</h5>
                        <div className="rating">stars</div>
                    </div>
                </div>
                <div className="farmer_card">
                    <img className='farmer_img' src={Nilesh} alt="" />
                    <div className="farmer_detail">
                        <h3 className="name">Yukesh Katwal</h3>
                        <h5 className="occupation">Cauliflower farmer</h5>
                        <div className="rating">stars</div>
                    </div>
                </div>
                <div className="farmer_card">
                    <img className='farmer_img' src={Nilesh} alt="" />
                    <div className="farmer_detail">
                        <h3 className="name">Yukesh Katwal</h3>
                        <h5 className="occupation">Cauliflower farmer</h5>
                        <div className="rating">stars</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
