import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
import {
    HiLocationMarker
} from 'react-icons/hi';
import { useSelector } from "react-redux";
const zoom = 8;
const items = [
    {
        place: 'pokhara',
        lat: 28.2096,
        long: 83.9856
    },
    {
        place: 'jhapa',
        lat: 26.5455,
        long: 87.8942
    },
    {
        place: 'kathmandu',
        lat: 27.7172,
        long: 85.3240
    },
    {
        place: 'Mt. Everest',
        lat: 27.9881,
        long: 86.9250
    },
]
export default function Map() {
    const state = useSelector((state) => state.Slice1)
    const [coordinates, setCoordinates] = useState(state?.mapLocation)

    // const [coordinates, setCoordinates] = useState({
    //     lat: 28,
    //     long: 28
    // })
    const [data, setData] = useState(items)
    const [childClicked, setChildClicked] = useState(null)
    useEffect(() => {
        async function getAddress() {
            let pos = await new Promise((resolve, reject) => {
                navigator?.geolocation?.getCurrentPosition(resolve, reject)
            })
            const { latitude, longitude } = pos.coords
            console.log('called here')
            setCoordinates({ lat: latitude, lng: longitude })
        }
        getAddress()
    }, [])
    console.log({ childClicked })
    return (
        <div style={{ height: '100vh', width: '100%', }}>
            <GoogleMapReact
                defaultCenter={coordinates}
                defaultZoom={zoom}
                bootstrapURLKeys={{ key: 'AIzaSyDh0mmKyaIeWxTS-oII7ugqKb91afj4ZQ8' }}
                center={coordinates}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                }}
                onChildClick={(e) => {
                    setChildClicked(e)
                }}
            >
                {/* {data &&
                    data.map((item) => ( */}
                <div
                    lat={coordinates?.lat}
                    lng={coordinates?.lng}
                >
                    <HiLocationMarker
                        className="text-red-600"
                        size={28}
                    />

                    <div className="w-fit rounded-lg bg-red-500 p-1 text-white ">
                        Seller Location
                    </div>
                </div>

                <div
                    lat={26}
                    lng={87}
                >
 <HiLocationMarker
                        className="text-yellow-600"
                        size={28}
                    />
                    <div className="w-fit rounded-lg bg-yellow-500 p-1 text-white ">
                        Buyer Location
                    </div>
                </div>
                {/* ))} */}
            </GoogleMapReact>
            {/* <div
                className="h-[17vh] flex items-center  w-full bg-red-500"
            >
                <p className="text-white text-5xl ml-12">Some Famous Tourists Areas</p>
            </div> */}
        </div>
    );
}