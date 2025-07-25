'use client'

import { useEffect, useState } from "react";
import { blob } from "stream/consumers";
import { error } from "console";

interface whydata {
    heading: string;
    subheading: string;
}

const whydata: whydata[] = [
    {
        heading: "Pollution Detection",
        subheading: "Detects plastic waste, and debris in the water, and pinpoints the locations of these materials.",
    },
    {
        heading: "Sea State Monitoring",
        subheading: "Gauges the conditions of the sea and determines whether it is calm or rough.",
    },
    {
        heading: "Data Accessibility",
        subheading: "Offers visual representations of locations with pollutants via a software platform.",
    }
]

const Why = () => {

    return (
        <div id="about">

            <div className='mx-auto max-w-7xl px-4 my-10 sm:py-10 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>

                    {/* COLUMN-1 */}
                    <div className="relative lg:ml-10"> {/* Adjusted the margin to fit your layout */}
                    
                    <img
                        src="/assets/why/about.jpg"
                        alt="Fetched Image from Backend"
                        style={{
                            maxWidth: '90%',     // Image will take up to 80% of the container width
                            height: 'auto',      // Height will adjust proportionally to maintain aspect ratio
                            marginRight: '10%',
                            marginTop: '5%',
                            marginBottom: '5%',
                            objectFit: 'contain' // Ensure the image maintains its aspect ratio while filling the available space
                        }}
                    />
                    
                </div>

                    {/* COLUMN-2 */}
                    <div>
                        <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">About</h3>
                        <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">OceanEyes is an innovative system designed to monitor and analyze sea pollution
                        levels and sea state in real time.</h4>

                        <div className="mt-10">
                            {whydata.map((items, i) => (
                                <div className="flex mt-4" key={i}>
                                    <div className="rounded-full h-10 w-12 flex items-center justify-center bg-circlebg">
                                        <img src="/assets/why/check.svg" alt="check-image" width={24} height={24} />
                                    </div>
                                    <div className="ml-5">
                                        <h4 className="text-2xl font-semibold">{items.heading}</h4>
                                        <h5 className="text-lg text-beach font-normal mt-2">{items.subheading}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Why;
