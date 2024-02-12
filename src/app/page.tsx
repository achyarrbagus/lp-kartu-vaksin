"use client";

import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeId from "./page-id";

import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";

const Home = () => {
  const redirectWa = (e: any) => {
    e.preventDefault();

    const name = document.getElementById("name") as HTMLInputElement | null;
    const address = document.getElementById(
      "address"
    ) as HTMLInputElement | null;

    const service = document.getElementById(
      "service"
    ) as HTMLInputElement | null;
    if (name?.value && address?.value && service?.value) {
      if (service.value == "Select Service") {
        return alert("please fill form correcly");
      }
      const wardingWa = encodeURIComponent(`
Hello CepatSehat.com by Cepat Sehat Clinic, i want a consultation 
   
Name : ${name.value}
Address : ${address.value} 
Services : ${service.value}`);
      let url = `https://api.whatsapp.com/send/?phone=6282211189009&text=${wardingWa}&type=phone_number&app_absent=0`;
      window.location.href = url;

      return;
    } else {
      alert("please fill form with correctly");
    }
  };

  const redirectTele = () => {
    window.location.href = "https://t.me/InfusionJakarta";
  };

  const lang = useSelector((state: any) => state.lang.value);

  switch (lang) {
    case "ID":
      return (
        <>
          <HomeId />
        </>
      );
    default:
      return (
        <>
          <div className="content">
            <section className="banner-pages homepage">
              <div className="container">
                <div className="text">
                  <h3>IN-HOME VACCINATION SERVICES</h3>
                  <p>
                    Savety and Convenience in Maintaining Your Family's Health
                    Administered <b>100%</b> by
                    <b>Specialized Vaccination</b>
                  </p>
                  <a href="#book" className="btn btn-warning fs-14">
                    Order Now
                  </a>
                </div>
              </div>
            </section>

            <section className="doctor-name">
              <div className="container">
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src="assets/img/img-doctor.png"
                    className="img-doctor-anak"
                    alt=""
                  />
                  <div className="name">
                    <p>
                      Directly Supervised by Our <b>Pediatrician</b>
                    </p>
                    <hr />
                    <b>dr. Dwi Suryaning Ayu Aprilizia, Sp.A</b>
                  </div>
                </div>
              </div>
            </section>

            <div className="row g-0">
              <div className="col-md-6">
                <section className="kelebihan">
                  <div className="container">
                    <div className="title-flex">
                      <p>
                        Advantages of Choosing In-Home Vaccination from
                        <span className="text-primary"> Cepat Sehat</span>
                      </p>
                      <img
                        src="assets/img/ic-kelebihan.png"
                        className="img-title"
                        alt=""
                      />
                    </div>
                    <div className="list-benefits">
                      <div className="items-benefits">
                        <img
                          src="assets/img/icon-kelebihan/ic-kelebihan01.svg"
                          className="img-benefits"
                          alt=""
                        />
                        <p>Can determine your own time and place</p>
                      </div>
                      <div className="items-benefits">
                        <img
                          src="assets/img/icon-kelebihan/ic-kelebihan02.svg"
                          className="img-benefits"
                          alt=""
                        />
                        <p>No need to queue and get stuck on the road</p>
                      </div>
                      <div className="items-benefits">
                        <img
                          src="assets/img/icon-kelebihan/ic-kelebihan03.svg"
                          className="img-benefits"
                          alt=""
                        />
                        <p>
                          Consultations with doctors are more flexible, you can
                          ask anything
                        </p>
                      </div>
                      <div className="items-benefits">
                        <img
                          src="assets/img/icon-kelebihan/ic-kelebihan04.svg"
                          className="img-benefits"
                          alt=""
                        />
                        <p>Complete child growth monitoring service</p>
                      </div>
                      <div className="items-benefits">
                        <img
                          src="assets/img/icon-kelebihan/ic-kelebihan05.svg"
                          className="img-benefits"
                          alt=""
                        />
                        <p>
                          Reminder of the next vaccination schedule from the
                          doctor
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-md-6">
                <section className="kelebihan bg-white">
                  <div className="container">
                    <div className="title-flex">
                      <p>Benefits of Child Vaccination</p>
                      <img
                        src="assets/img/ic-manfaat.png"
                        className="img-title"
                        alt=""
                      />
                    </div>
                    <div className="list-benefits">
                      <div className="items-benefits">
                        <img
                          src="assets/img/icon-manfaat/ic-manfaat01.svg"
                          className="img-benefits"
                          alt=""
                        />
                        <p>Strengthens the body's immune system</p>
                      </div>
                      <div className="items-benefits">
                        <img
                          src="assets/img/icon-manfaat/ic-manfaat02.svg"
                          className="img-benefits"
                          alt=""
                        />
                        <p>
                          Protects children from serious diseases such as polio,
                          measles, rubella, hepatitis, etc
                        </p>
                      </div>
                      <div className="items-benefits">
                        <img
                          src="assets/img/icon-manfaat/ic-manfaat03.svg"
                          className="img-benefits"
                          alt=""
                        />
                        <p>
                          Prevent infection from spreading diseases that can be
                          transmitted to other people
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className="container">
              <div className="row mt-0 mt-md-3 gy-4 justify-content-center">
                <div className="col-md-6">
                  <section className="jadwal">
                    <div className="container">
                      <img
                        src="assets/img/Jadwal Vaksinasi Anak 1.png"
                        className="w-100"
                        alt=""
                      />
                      <div className="text-center mt-4">
                        <a
                          href={"/assets/pdf/jadwal-vaksinasi-anak.pdf"}
                          className="text-primary fs-14 text-decoration-underline"
                          download
                        >
                          <i className="mdi mdi-download"></i> Child
                          Vaccinations Schedule Aged 0-18 Years
                        </a>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="col-md-6">
                  <section className="jenis">
                    <div className="container">
                      <img
                        src="assets/img/Jenis Vaksin dan Harga 1.png"
                        className="w-100"
                        alt=""
                      />
                      <div className="text-center mt-4">
                        <a
                          href={"/assets/pdf/harga-vaksin.pdf"}
                          className="text-primary fs-14 text-decoration-underline"
                          download
                        >
                          <i className="mdi mdi-download"></i> Download Vaccine
                          Types and Prices
                        </a>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="col-md-8">
                  <section className="jadwal-imunisasi">
                    <div className="container">
                      <p className="text-center fs-18 fw-bold">
                        IDAI Child Immunization Schedule 2023
                      </p>
                      <img
                        src="assets/img/jadwal-imunisasi-2023-270523 1.png"
                        className="w-100"
                        alt=""
                      />
                      <div className="text-center mt-4">
                        <a
                          href={"/assets/pdf/jadwal-imunisasi.pdf"}
                          className="text-primary fs-14 text-decoration-underline"
                          download
                        >
                          <i className="mdi mdi-download"></i> Download IDAI
                          2023 Child Immunization Schedule
                        </a>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            <section className="book" id="book">
              <div className="container">
                <h3 className="title-section"> Book Now </h3>
                <form action="#">
                  <div className="row mb-3 g-3">
                    <div className="col-md-4">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Your Address"
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Service</label>
                      <select
                        className="form-select  form-control"
                        id="service"
                        aria-label="Default select example"
                      >
                        <option>Select Service</option>
                        <option value="BCG Vaccine">BCG Vaccine</option>
                        <option value="Measles Vaccine">Measles Vaccine</option>
                        <option value="Dengue Vaccine">Dengue Vaccine</option>
                        <option value="Polio Vaccine">Polio Vaccine</option>
                        <option value="DtwP Vaccine">DtwP Vaccine</option>
                        <option value="Child HEP A Vaccine">
                          Child HEP A Vaccine
                        </option>
                        <option value="Adult HEP A Vaccine">
                          Adult HEP A Vaccine
                        </option>
                        <option value="Child HEP B Vaccine">
                          Child HEP B Vaccine
                        </option>
                        <option value="Adult HEP B Vaccine">
                          Adult HEP B Vaccine
                        </option>
                        <option value="Bivalent Vaccine">
                          Bivalent Vaccine
                        </option>
                        <option value="Quadrivalent Vaccine">
                          Quadrivalent Vaccine
                        </option>
                        <option value="Nonavalent Vaccines">
                          Nonavalent Vaccines
                        </option>
                        <option value="Influenza Vaccine">
                          Influenza Vaccine
                        </option>
                        <option value="JE Vaccine">JE Vaccine</option>
                        <option value="Meningitis Vaccine">
                          Meningitis Vaccine
                        </option>
                        <option value="MMR Vaccine">MMR Vaccine</option>
                        <option value="MR Vaccine">MR Vaccine</option>
                        <option value="Pneumonia Vaccine">
                          Pneumonia Vaccine
                        </option>
                        <option value="Rabies Vaccine">Rabies Vaccine</option>
                        <option value="Rotavirus Vaccine">
                          Rotavirus Vaccine
                        </option>
                        <option value="TD Vaccine">TD Vaccine</option>
                        <option value="TDAP Vaccine">TDAP Vaccine</option>
                        <option value="Yellow Fever Vaccine">
                          Yellow Fever Vaccine
                        </option>
                        <option value="Other Vaccines">Other Vaccines</option>
                      </select>
                    </div>
                  </div>
                  <div className="row g-3 justify-content-center">
                    <div className="col-6 col-md-3">
                      <button
                        type="submit"
                        onClick={redirectWa}
                        className="btn btn-whatsapp w-100"
                      >
                        <i className="mdi mdi-whatsapp fs-18 me-2"></i>
                        Whatsapp
                      </button>
                    </div>
                    <div className="col-6 col-md-3">
                      <a
                        type="submit"
                        href="https://t.me/InfusionJakarta"
                        className="btn btn-telegram w-100"
                      >
                        <i className="fa-brands fa-telegram fs-18 me-2"></i>
                        Telegram
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </>
      );
  }
};

export default Home;
