import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image'

export default function Navigation() {

  return (
    <div className="bannerBlock">
      <Image
        src="/img/image_banner.png"
        alt=""
        width="557" height="346"
      />

    </div>
  )
}