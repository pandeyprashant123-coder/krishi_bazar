import React from 'react'
import Nilesh from "../images/cauliflower.jpg"
export const Products = () => {
  return (
    <div className="available_farmers">
        <div className="product_head">

            <h1 className="available">
Our Products            </h1>
<select name="" id="">
                    <option value="">Select Quantity</option>
                    <option value="">small</option>
                    <option value="">Medium</option>
                    <option value="">Large</option>
                </select>
        </div>

            <div className="farmer_cards">
                <div className="farmer_card">
                    <img className='farmer_img' src={Nilesh} alt="" />
                    <div className="farmer_detail">
                        <h3 className="name">Cauliflower</h3>
                        <div className="rating">stars</div>
                    </div>
                </div>
                <div className="farmer_card">
                    <img className='farmer_img' src={Nilesh} alt="" />
                    <div className="farmer_detail">
                        <h3 className="name">Cauliflower</h3>
                        <div className="rating">stars</div>
                    </div>
                </div>
                <div className="farmer_card">
                    <img className='farmer_img' src={Nilesh} alt="" />
                    <div className="farmer_detail">
                        <h3 className="name">Cauliflower</h3>
                        <div className="rating">stars</div>
                    </div>
                </div>
                <div className="farmer_card">
                    <img className='farmer_img' src={Nilesh} alt="" />
                    <div className="farmer_detail">
                        <h3 className="name">Cauliflower</h3>
                        <div className="rating">stars</div>
                    </div>
                </div>
                <div className="farmer_card">
                    <img className='farmer_img' src={Nilesh} alt="" />
                    <div className="farmer_detail">
                        <h3 className="name">Cauliflower</h3>
                        <div className="rating">stars</div>
                    </div>
                </div>
                <div className="farmer_card">
                    <img className='farmer_img' src={Nilesh} alt="" />
                    <div className="farmer_detail">
                        <h3 className="name">Cauliflower</h3>
                        <div className="rating">stars</div>
                    </div>
                </div>
                <div className="farmer_card">
                    <img className='farmer_img' src={Nilesh} alt="" />
                    <div className="farmer_detail">
                        <h3 className="name">Cauliflower</h3>
                        <div className="rating">stars</div>
                    </div>
                </div>
                <div className="farmer_card">
                    <img className='farmer_img' src={Nilesh} alt="" />
                    <div className="farmer_detail">
                        <h3 className="name">Cauliflower</h3>
                        <div className="rating">stars</div>
                    </div>
                </div>
                <div className="farmer_card">
                    <img className='farmer_img' src={Nilesh} alt="" />
                    <div className="farmer_detail">
                        <h3 className="name">Cauliflower</h3>
                        <div className="rating">stars</div>
                    </div>
                </div>
            </div>
        </div>
  )
}
