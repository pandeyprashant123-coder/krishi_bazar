import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
// import Nilesh from "../images/cauliflower.jpg"
const Nilesh = '/hero.png'
const product = () => {
  const state = useSelector((state) => state.Slice1)
  console.log(state.userData)
  const vegetables = state?.userData?.filter((item) => item?.category == 'Vegetables')
  const fruits = state?.userData?.filter((item) => item?.category == 'Fruits')
  const grains = state?.userData?.filter((item) => item?.category === 'Grain')
  return (
    <div className="available_farmers">
      <div className="product_head">
        <h1 className="available text-5xl font-bold">
          Our Products            </h1>
        {/* <select name="" id="">
          <option value="">Select Quantity</option>
          <option value="">small</option>
          <option value="">Medium</option>
          <option value="">Large</option>
        </select> */}
      </div>
      <div className='mt-8 px-5'>
        <div>
          <p className='text-2xl font-bold '>Vegetables</p>
          <div className="farmer_cards">
            {vegetables?.map(({ productName, productPrice, category }) => (
              <Link href={`/product-detail/${productName}`}>
                <div class="max-w-sm rounded overflow-hidden shadow-md  hover:scale-105 transition-all ease-out duration-150">
                  <img class="w-full" src="https://www.shutterstock.com/image-photo/assorted-organic-vegetables-fruits-wicker-260nw-1720876849.jpg
" alt="Sunset in the mountains" />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{productName.toUpperCase()}</div>
                    <div class="font-bold text-xl mb-2">Rs. {productPrice}</div>
                    <div class="text-gray-700 text-base">
                      Rice, (Oryza sativa), edible starchy cereal grain and the grass plant (family Poaceae) by which it is produced. Roughly.. ..
                    </div>
                  </div>
                  <p></p>
                  <p></p>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Order Now</span>

                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
        <div>
          <p className='text-2xl font-bold '>Grain</p>
          <div className="farmer_cards">

            {grains?.map(({ productName, productPrice, category }) => (
              <Link href={`/product-detail/${productName}`}>

                <div class="max-w-sm rounded overflow-hidden shadow-md hover:scale-105 transition-all ease-out duration-150">
                  <img class="w-full" src="https://www.health.com/thmb/fx7NMvBr5socZxi9L4PdZ4GjaT8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/whole-grains-what-are-they-400x400-9ddbcbaf02ef40d18cb8fb29faa27f13.jpg" alt="Sunset in the mountains" />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{productName.toUpperCase()}</div>
                    <div class="font-bold text-xl mb-2">Rs. {productPrice}</div>
                    <div class="text-gray-700 text-base">
                      Rice, (Oryza sativa), edible starchy cereal grain and the grass plant (family Poaceae) by which it is produced. Roughly.. ..
                    </div>
                  </div>
                  <p></p>
                  <p></p>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Order Now</span>

                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
        <div>
          <p className='text-2xl font-bold '>Fruits</p>
          <div className="farmer_cards">

            {fruits?.map(({ productName, productPrice, category }) => (
              <Link href={`/product-detail/${productName}`}>
              

                <div class="max-w-sm rounded overflow-hidden shadow-md hover:scale-105 transition-all ease-out duration-150">
                  <img class="w-full" src="https://images.herzindagi.info/image/2022/May/summer-fruits-to-have.jpg" alt="Sunset in the mountains" />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{productName.toUpperCase()}</div>
                    <div class="font-bold text-xl mb-2">Rs. {productPrice}</div>
                    <div class="text-gray-700 text-base">
                      Rice, (Oryza sativa), edible starchy cereal grain and the grass plant (family Poaceae) by which it is produced. Roughly.. ..
                    </div>
                  </div>
                  <p></p>
                  <p></p>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Order Now</span>

                  </div>
                </div>


              </Link>
            ))}
          </div>

        </div>


      </div>




    </div>
  )
}

export default product
