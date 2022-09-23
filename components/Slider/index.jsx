// import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class Navigation extends Component {
  render() {
      return (
          <div className="bannerBlock">
            
            <Carousel showThumbs={false} showIndicators={true} showStatus={false}>
                <div>
                    <img src="img/image_banner.png" alt="image1"/>

                </div>
                <div>
                <img src="img/image_banner.png" alt="image1"/>

                </div>
                
            </Carousel>
          </div>
      );
  }
};
// export default function Navigation() {

//   return (
//     <div className="bannerBlock">
//       <Image
//         src="/img/image_banner.png"
//         alt=""
//         width="557" height="346"
//       />

//     </div>
//   )
// }