"use client";

import React from "react";

function Header() {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cepat Sehat</title>
        {/* <!-- swiper --> */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

        {/* <!-- icons --> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.2.96/css/materialdesignicons.min.css"
          integrity="sha512-LX0YV/MWBEn2dwXCYgQHrpa9HJkwB+S+bnBpifSOTO1No27TqNMKYoAn6ff2FBh03THAzAiiCwQ+aPX+/Qt/Ow=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />

        {/* <!-- favicon --> */}
        <link rel="icon" type="image/x-icon" href="/assets/img/favicon.svg" />

        {/* <!-- fontello --> */}
        <link rel="stylesheet" href="/assets/fontello/css/csehat.css" />

        {/* <!-- swiper --> */}
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />

        {/* <!-- bootstrap --> */}
        <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />

        {/* <!-- custom --> */}
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
    </>
  );
}

export default Header;
