import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cepat Sehat",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
      <body className={inter.className}>
        <nav className="nav nav-top fixed-top">
          <div className="container">
            <div className="d-flex align-items-center">
              <Link href="/">
                <div style={{ cursor: "pointer" }} className="nav-brand">
                  <img src="/assets/img/logo.png" alt="" />
                </div>
              </Link>

              <div className="btn-group ms-auto">
                <button
                  type="button"
                  className="btn btn-secondary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-earth me-2"></i> EN
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <button className="dropdown-item" type="button">
                      English
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Indonesia
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <div className="container">
            <div className="d-flex align-items-center">
              <a href="/">
                <img src="/assets/img/logo-white.png" className="logo" alt="" />
              </a>
              <img src="/assets/img/logo-atensi.png" className="logo-atensi ms-auto" alt="" />
            </div>
            <div className="row mt-4">
              <div className="col-md-8 text-white">
                <h4 className="fs-14">PT Cepat Sehat Indonesia</h4>
                <p>
                  Jalan Peternakan No. 13, Kel. Tengah, Kec. Kramat jati, Kota Adm. Jakarta Timur, Provinsi DKI Jakarta 13510{" "}
                  <br />
                  sehatcepat.com
                </p>
              </div>
              <div className="col-md-12">
                <div className="d-flex align-items-center">
                  <a
                    href="https://api.whatsapp.com/send/?phone=6282211189009&text&type=phone_number&app_absent=0"
                    className="phone text-white fs-14 d-flex align-items-center"
                  >
                    <i className="mdi mdi-phone me-2 fs-24"></i> 0822 1118 9009
                  </a>
                  <div className="sosmed list-inline ms-auto">
                    <a href="#" className="list-inline-item text-white">
                      <i className="mdi mdi-web fs-24"></i>
                    </a>
                    <a href="https://www.facebook.com/klinikcepatsehat" className="list-inline-item text-white">
                      <i className="mdi mdi-facebook fs-24"></i>
                    </a>
                    <a href="https://www.instagram.com/sehatcepat.mobi/ " className="list-inline-item text-white">
                      <i className="mdi mdi-instagram fs-24"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">Copyright © 2024 Cepat Sehat. All Rights Reserved.</div>
        </footer>
        <div
          className="btn-float"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          data-bs-title="Consult with Our Medical Team"
          data-bs-custom-className="custom-tooltip"
        >
          <div className="btn-circle whatsapp">
            <a
              href="https://api.whatsapp.com/send/?phone=6282211189009&text&type=phone_number&app_absent=0"
              className="text-white"
            >
              <i className="fs-24 fa-brands fa-whatsapp"></i>
            </a>
          </div>
          <div className="btn-circle telegram">
            <a href="https://t.me/InfusionJakarta" className="text-white">
              <i className="fs-24 fa-brands fa-telegram"></i>
            </a>
          </div>
        </div>

        <script type="module" src="/src/main.tsx"></script>
        <script src="/assets/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/js/swiper-bundle.min.js"></script>
        <script src="/assets/js/index.js"></script>
        <script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
