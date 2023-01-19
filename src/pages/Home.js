import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import Cauliflower from "../images/cauliflower.jpg"
import Tomatos from "../images/tomatos.jpg"
import Nilesh from "../images/nilesh.jpg"
const images = [
    { url: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80' },
    { url: 'https://images.unsplash.com/photo-1524593166156-312f362cada0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
  ];
export const Home = () => {
  return (
    <>
    <div className='sliderImg'>
      <SimpleImageSlider
        width={1220}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
    <div className="available_farmers">
            <h1 className="available">
                Our Happy Farmers
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
    <div className="available_farmers">
            <h1 className="available">
                Categories
            </h1>
            <div className="farmer_cards">
                <div className="farmer_card">
                    <img className='farmer_img' src={Nilesh} alt="" />
                    <div className="farmer_detail">
                        <h3 className="name">Grains</h3>
                    </div>
                </div>
                <div className="farmer_card">
                    <img className='farmer_img' src={Nilesh} alt="" />
                    <div className="farmer_detail">
                        <h3 className="name">Vegetables</h3>
                    </div>
                </div>
                <div className="farmer_card">
                    <img className='farmer_img' src={Nilesh} alt="" />
                    <div className="farmer_detail">
                        <h3 className="name">Fruits</h3>
                    </div>
                </div>
            </div>
        </div>
    <div className="available_farmers">
            <h1 className="available">
                Our Products
            </h1>
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
            </div>
        </div>
    </>
  )
}
