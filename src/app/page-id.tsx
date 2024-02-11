"use client";

import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";

const HomeId = () => {
  const CutText = (text: string) => {
    let sentences = text.split("");
    // Mengambil 100 kalimat pertama
    let first100Sentences = sentences.slice(0, 40);
    let resultText = first100Sentences.join("");
    return resultText;
  };

  const redirectWa = (e: any) => {
    e.preventDefault();

    const name = document.getElementById("name") as HTMLInputElement | null;
    const address = document.getElementById("address") as HTMLInputElement | null;

    const service = document.getElementById("service") as HTMLInputElement | null;
    if (name?.value && address?.value && service?.value) {
      if (service.value == "Select Service") {
        return alert("please fill form correcly");
      }
      const wardingWa = encodeURIComponent(`
Hallo CepatSehat.com by Klinik Cepat Sehat, saya ingin konsultasi      
Name : ${name.value}
Service : ${address.value} 
Layanan : ${service.value}`);
      let url = `https://api.whatsapp.com/send/?phone=6282211189009&text=${wardingWa}&type=phone_number&app_absent=0`;
      window.location.href = url;

      return;
    } else {
      alert("please fill form with correctly");
    }
  };

  const redirectTele = () => {
    window.location.replace("https://t.me/InfusionJakarta");
  };

  const lang = useSelector((state: any) => state.lang.value);

  return (
    <>
      <div className="content">
        <section className="banner-pages homepage">
          <div className="container">
            <div className="text">
              <h3>LAYANAN VAKSINASI DI RUMAH</h3>
              <p>
                Keamanan dan Kemudahan Menjaga Kesehatan Keluarga Anda <b>100%</b> Diberikan Oleh <b>Dokter Khusus Vaksinasi</b>
              </p>
              <a href="#book" className="btn btn-warning fs-14">
                {" "}
                Pesan Sekarang{" "}
              </a>
            </div>
          </div>
        </section>

        <section className="doctor-name">
          <div className="container">
            <div className="d-flex align-items-center justify-content-center">
              <img src="assets/img/img-doctor.png" className="img-doctor-anak" alt="" />
              <div className="name">
                <p>
                  Diawasi langsung oleh
                  <b> Dokter Anak </b> kami
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
                    Kelebihan Memilih Vaksin di Rumah dari <span className="text-primary"> Cepat Sehat</span>
                  </p>
                  <img src="assets/img/ic-kelebihan.png" className="img-title" alt="" />
                </div>
                <div className="list-benefits">
                  <div className="items-benefits">
                    <img src="assets/img/icon-kelebihan/ic-kelebihan01.svg" className="img-benefits" alt="" />
                    <p>Bisa menentukan waktu dan tempat sendiri</p>
                  </div>
                  <div className="items-benefits">
                    <img src="assets/img/icon-kelebihan/ic-kelebihan02.svg" className="img-benefits" alt="" />
                    <p>Tidak perlu repot antri dan macet di jalan</p>
                  </div>
                  <div className="items-benefits">
                    <img src="assets/img/icon-kelebihan/ic-kelebihan03.svg" className="img-benefits" alt="" />
                    <p>Konsultasi dengan dokter lebih leluasa, bisa tanya apa saja</p>
                  </div>
                  <div className="items-benefits">
                    <img src="assets/img/icon-kelebihan/ic-kelebihan04.svg" className="img-benefits" alt="" />
                    <p>Layanan pemantauan tumbuh kembang anak yang lengkap</p>
                  </div>
                  <div className="items-benefits">
                    <img src="assets/img/icon-kelebihan/ic-kelebihan05.svg" className="img-benefits" alt="" />
                    <p>Pengingat jadwal vaksinasi berikutnya dari dokter</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-md-6">
            <section className="kelebihan bg-white">
              <div className="container">
                <div className="title-flex">
                  <p>Manfaat Vaksinasi Anak</p>
                  <img src="assets/img/ic-manfaat.png" className="img-title" alt="" />
                </div>
                <div className="list-benefits">
                  <div className="items-benefits">
                    <img src="assets/img/icon-manfaat/ic-manfaat01.svg" className="img-benefits" alt="" />
                    <p>Memperkuat sistem imun tubuh</p>
                  </div>
                  <div className="items-benefits">
                    <img src="assets/img/icon-manfaat/ic-manfaat02.svg" className="img-benefits" alt="" />
                    <p>Melindungi anak dari penyakit serius seperti polio, campak, rubela, hepatitis, dll</p>
                  </div>
                  <div className="items-benefits">
                    <img src="assets/img/icon-manfaat/ic-manfaat03.svg" className="img-benefits" alt="" />
                    <p>Mencegah infeksi penyebaran penyakit yang dapat menular ke orang lain</p>
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
                  <img src="assets/img/Jadwal Vaksinasi Anak 1.png" className="w-100" alt="" />
                  <div className="text-center mt-4">
                    <a
                      href={"/assets/pdf/jadwal-vaksinasi-anak.pdf"}
                      className="text-primary fs-14 text-decoration-underline"
                      download
                    >
                      <i className="mdi mdi-download"></i> Jadwal Vaksinasi Anak Umur 0-18 Tahun
                    </a>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-md-6">
              <section className="jenis">
                <div className="container">
                  <img src="assets/img/Jenis Vaksin dan Harga 1.png" className="w-100" alt="" />
                  <div className="text-center mt-4">
                    <a href={"/assets/pdf/harga-vaksin.pdf"} className="text-primary fs-14 text-decoration-underline" download>
                      <i className="mdi mdi-download"></i> Download Jenis Vaksin dan Harga
                    </a>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-md-8">
              <section className="jadwal-imunisasi">
                <div className="container">
                  <p className="text-center fs-18 fw-bold">Jadwal Imunisasi Anak IDAI 2023</p>
                  <img src="assets/img/jadwal-imunisasi-2023-270523 1.png" className="w-100" alt="" />
                  <div className="text-center mt-4">
                    <a
                      href={"/assets/pdf/jadwal-imunisasi.pdf"}
                      className="text-primary fs-14 text-decoration-underline"
                      download
                    >
                      <i className="mdi mdi-download"></i> Download Jadwal Imunisasi Anak IDAI 2023
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <section className="book" id="book">
          <div className="container">
            <h3 className="title-section"> Pesan Sekarang </h3>
            <form action="#">
              <div className="row mb-3 g-3">
                <div className="col-md-4">
                  <label className="form-label">Nama</label>
                  <input type="text" className="form-control" id="name" placeholder="Nama Anda" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Alamat</label>
                  <input type="text" className="form-control" id="address" placeholder="Alamat anda" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Layanan</label>
                  <select className="form-select  form-control" id="service" aria-label="Default select example">
                    <option>Pilih Layanan</option>
                    <option value="Vaksin BCG">Vaksin BCG</option>
                    <option value="Vaksin Campak">Vaksin Campak</option>
                    <option value="Vaksin DBD">Vaksin DBD</option>
                    <option value="Vaksin Polio">Vaksin Polio</option>
                    <option value="Vaksin DtwP">Vaksin DtwP</option>
                    <option value="Vaksin HEP A Anak">Vaksin HEP A Anak</option>
                    <option value="Vaksin HEP A Dewasa">Vaksin HEP A Dewasak</option>
                    <option value="Vaksin HEP B Anak">Vaksin HEP B Anak</option>
                    <option value="Vaksin HEP B Dewasa">Adult HEP B Vaccine</option>
                    <option value="Vaksin Bivalen">Vaksin Bivalen</option>
                    <option value="Vaksin Kuadrivalen">Vaksin Kuadrivalen</option>
                    <option value="Vaksin Nonavalen">Vaksin Nonavalen</option>
                    <option value="Vaksin Influenza">Vaksin Influenza</option>
                    <option value="Vaksin Meningitis">Vaksin Meningitis</option>
                    <option value="Vaksin MMR">Vaksin MMR</option>
                    <option value="Vaksin MR">Vaksin MR</option>
                    <option value="Vaksin Pneumonia">Vaksin Pneumonia</option>
                    <option value="Vaksin Rabies">Vaksin Rabies</option>
                    <option value="Vaksin Rotavirus">Vaksin Rotavirus</option>
                    <option value="Vaksin TD">Vaksin TD</option>
                    <option value="Vaksin TDAP">Vaksin TDAP</option>
                    <option value="Vaksin Yellow Fever">Vaksin Yellow Fever</option>
                    <option value="Vaksin lainnya">Vaksin lainnya</option>
                  </select>
                </div>
              </div>
              <div className="row g-3 justify-content-center">
                <div className="col-6 col-md-3">
                  <button type="submit" onClick={redirectWa} className="btn btn-whatsapp w-100">
                    <i className="mdi mdi-whatsapp fs-18 me-2"></i>
                    Whatsapp
                  </button>
                </div>
                <div className="col-6 col-md-3">
                  <button type="submit" onClick={redirectTele} className="btn btn-telegram w-100">
                    <i className="fa-brands fa-telegram fs-18 me-2"></i>
                    Telegram
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeId;
