import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import Happyfarmer from '../Happyfarmer';
// import Nilesh from "../images/nilesh.jpg"
const Nilesh = 'https://github.com/pandeyprashant123-coder/krishi_bazar/blob/main/src/images/nilesh.jpg?raw=true'
const images = [
    { url: 'https://github.com/pandeyprashant123-coder/krishi_bazar/blob/main/src/images/banner3.png?raw=true' },
    { url: 'https://github.com/pandeyprashant123-coder/krishi_bazar/blob/main/src/images/banner2.png?raw=true' },
    { url: 'https://github.com/pandeyprashant123-coder/krishi_bazar/blob/main/src/images/banner3.png?raw=true' },

    { url: 'https://www.trekkingtrail.com/uploads/img/ropain-festival-the-rice-planting-festival-in-nepal_1530169099.jpg' },
    { url: 'https://scontent.fbir1-1.fna.fbcdn.net/v/t1.15752-9/323693098_731062741600439_6565061938418327158_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=-7zRhMf4RoYAX8beFDg&_nc_ht=scontent.fbir1-1.fna&oh=03_AdSRbajG2ppKsKruadKAh15THpvr8zawB-5uwoaP8sbz5Q&oe=63F19E29' },

];
export const Slider = () => {
    return (
        <>
            <div className='sliderImg'>
                <SimpleImageSlider
                    width={1518}
                    height={470}
                    images={images}
                    className='obje'
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true}
                />
            </div>
            <div className="available_farmers mb-5">
                <h1 className="text-5xl font-bold text-center">
                    Our Happy Farmers
                </h1>
                <div className="flex justify-center items-center space-x-8 mt-20">

                    <Happyfarmer />

                    <div class="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105 transition-all ease-out duration-150">
                        <img class="w-full" src="https://www.betterteam.com/images/farmer-job-description-4088x2725-20201130.jpeg?crop=4:3,smart&width=1200&dpr=2" alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Motiram Limbu</div>
                            <div class="text-gray-700 text-base  pr-0">
                                I am very much benefited through this platform as I can get good price of my products.
                            </div>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Enjoy</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Krishi</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Bazaar</span>
                        </div>
                    </div>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105 transition-all ease-out duration-150">
                        <img class="w-full" src="https://cdn.pixabay.com/photo/2022/01/16/14/07/man-6942147__340.jpg" alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Ram Bahadur Sunar</div>
                            <div class="text-gray-700 text-base">
                                I am very much benefited through this platform as I can get good price of my products.
                            </div>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Enjoy</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Krishi</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Bazaar</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="available_farmers mt-8">
                <h1 className="text-5xl text-center font-bold">
                    Categories
                </h1>
                <div className="farmer_cards">
                    <div className="farmer_card">
                        <img className='farmer_img' src={'https://cdn.britannica.com/89/140889-050-EC3F00BF/Ripening-heads-rice-Oryza-sativa.jpg'} alt="" />
                        <div className="farmer_detail">
                            <h3 className="text-xl font-medium italic">Grains</h3>
                        </div>
                    </div>
                    <div className="farmer_card">
                        <img className='farmer_img' src={'https://post.healthline.com/wp-content/uploads/2020/08/fruits-and-vegetables-thumb.jpg'} alt="" />
                        <div className="farmer_detail">
                            <h3 className="text-xl font-medium italic">Vegetables</h3>
                        </div>
                    </div>
                    <div className="farmer_card">
                        <img className='farmer_img' src={'https://www.bria.com.ph/wp-content/uploads/2022/03/in-season-fruits.png'} alt="" />
                        <div className="farmer_detail">
                            <h3 className="text-xl font-medium italic">Fruits</h3>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}