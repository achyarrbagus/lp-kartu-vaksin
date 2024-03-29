"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { setLang } from "../../../lib/redux/slices/langSlice/langSlice";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function LayoutWrapper({ children }) {
  const lang = useSelector((state) => state.lang.value);
  const dispatch = useDispatch();
  const router = useRouter();

  const redirectWa = () => {
    let wardingWa = encodeURIComponent(
      `Hallo, Saya ingin pesan vaksin anak di rumah`
    );
    if (lang == "EN") {
      wardingWa = encodeURIComponent(
        `Hello, I want to order child vaccines at home`
      );
    }

    let url = `https://api.whatsapp.com/send/?phone=6282211189009&text=${wardingWa}&type=phone_number&app_absent=0`;
    window.location.href = url;

    return;
  };

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cepat Sehat</title>
        {/* <!-- swiper --> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />

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
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.svg" />

        {/* <!-- fontello --> */}
        <link rel="stylesheet" href="assets/fontello/css/csehat.css" />

        {/* <!-- swiper --> */}
        <link rel="stylesheet" href="assets/css/swiper-bundle.min.css" />

        {/* <!-- bootstrap --> */}
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />

        {/* <!-- custom --> */}
        <link rel="stylesheet" href="assets/css/style.css" />
      </head>

      <nav className="nav nav-top fixed-top">
        <div className="container">
          <div className="d-flex align-items-center">
            <Link href="/">
              <div style={{ cursor: "pointer" }} className="nav-brand">
                <img src="/assets/img/logo.png" alt="" />
              </div>
            </Link>

            <div className="btn-group ms-auto">
              {(() => {
                switch (lang) {
                  case "ID":
                    return (
                      <button
                        type="button"
                        className="btn btn-secondary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="mdi mdi-earth me-2"></i> ID
                      </button>
                    );
                  default:
                    return (
                      <button
                        type="button"
                        className="btn btn-secondary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="mdi mdi-earth me-2"></i> EN
                      </button>
                    );
                }
              })()}

              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button
                    onClick={() => dispatch(setLang("EN"))}
                    className="dropdown-item"
                    type="button"
                  >
                    English
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => dispatch(setLang("ID"))}
                    className="dropdown-item"
                    type="button"
                  >
                    Indonesia
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {children}

      <OverlayTrigger
        placement="left"
        overlay={
          <Tooltip id="tooltip-left" className="custom-tooltip">
            Consult with Our Medical Team
          </Tooltip>
        }
      >
        <div className="btn-float">
          <div className="btn-circle whatsapp">
            <div onClick={redirectWa} className="text-white">
              <i className="fs-24 fa-brands fa-whatsapp"></i>
            </div>
          </div>
          <div className="btn-circle telegram">
            <a href="https://t.me/unbanking" className="text-white">
              <i className="fs-24 fa-brands fa-telegram"></i>
            </a>
          </div>
        </div>
      </OverlayTrigger>

      <footer className="footer">
        <div className="container">
          <div className="d-flex align-items-center">
            <Link href="/">
              <img src="assets/img/logo-white.png" className="logo" alt="" />
            </Link>
            <img
              src="assets/img/logo-atensi.png"
              className="logo-atensi ms-auto"
              alt=""
            />
          </div>
          <div className="row mt-4">
            <div className="col-md-8 text-white">
              <h4 className="fs-14">PT Cepat Sehat Indonesia</h4>
              <p>
                Jalan Peternakan No. 13, Kel. Tengah, Kec. Kramat jati, Kota
                Adm. Jakarta Timur, Provinsi DKI Jakarta 13510 <br />
                sehatcepat.com
              </p>
            </div>
            <div className="col-md-12">
              <div className="d-flex align-items-center">
                <Link
                  href="https://api.whatsapp.com/send/?phone=6282211189009&text&type=phone_number&app_absent=0"
                  className="phone text-white fs-14 d-flex align-items-center"
                >
                  <i className="mdi mdi-phone me-2 fs-24"></i> 0822 1118 9009
                </Link>
                <div className="sosmed list-inline ms-auto">
                  <Link href="#" className="list-inline-item text-white">
                    <i className="mdi mdi-web fs-24"></i>
                  </Link>
                  <Link
                    href="https://www.facebook.com/klinikcepatsehat"
                    className="list-inline-item text-white"
                  >
                    <i className="mdi mdi-facebook fs-24"></i>
                  </Link>
                  <Link
                    href="https://www.instagram.com/sehatcepat.mobi/ "
                    className="list-inline-item text-white"
                  >
                    <i className="mdi mdi-instagram fs-24"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          Copyright © 2024 Cepat Sehat. All Rights Reserved.
        </div>
      </footer>

      <script type="module" src="/src/main.tsx"></script>
      <script src="assets/bootstrap/js/main.js"></script>
      <script src="assets/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossOrigin="anonymous"
      ></script>
      <script src="https://cdn.jsdelivr.net/npm/bs5-lightbox@1.8.3/dist/index.bundle.min.js"></script>
    </>
  );
}

export default LayoutWrapper;
