"use client";
import Layout from "@/components/Layout";
import { Section } from "@/templates/LandingPage/components/Section";
import React, { ReactNode } from "react";
import Headline from "../assets/Headline.png";
import { FloatButton } from "antd";
import { useRouter } from "next/router";
import { WhatsAppOutlined, ArrowDownOutlined } from "@ant-design/icons";
import DokterPengawas from "../assets/Dokter-Pengawas.png";
import Content from "../assets/Content.png";
import Image from "next/image";
import JadwalVaksin from "../assets/Jadwal-Vaksinasi-Anak.jpg";
import JenisVaksin from "../assets/Jenis-Vaksin-dan-Harga.jpg";
import JadwalImunisasi from "../assets/jadwal-imunisasi-2023-270523.jpg";
import AskQuestion from "../assets/Contact Us.png";
import ArrowDonwload from "../assets/arrow-download.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Alamat from "../assets/Alamat.png";
import Help from "../assets/Help.png";
import WaLogo from "../assets/wa-logo.png";
import LogoRounded from "../assets/logo-rounded.png";
import FbLogo from "../assets/fb-logo.png";
import IgLogo from "../assets/ig-logo.png";
import AvensiLogo from "../assets/avensi-logo.png";

interface LayoutProps {
  title: string;
  back: string;
  keywords: string[];
  description: string;
  headerAction: string;
  children: ReactNode;
}

const Index: React.FC<LayoutProps> = () => {
  const router = useRouter();

  const NavigateWa = () => {
    router.push(
      "https://api.whatsapp.com/send/?phone=6282211189009&text=Saya+ingin+pesan+vaksin+anak&type=phone_number&app_absent=0"
    );
  };
  const title: string = "Klinik Cepat Sehat";
  const back: string = "Back Button";
  const keywords: string[] = ["keyword1", "keyword2"];
  const description: string = "Your description";
  const headerAction: string = "Header Action";
  return (
    <Layout>
      <FloatButton icon={<WhatsAppOutlined />} onClick={NavigateWa} />
      <div className="p-4 -mt-10">
        <section
          className="bg-center bg-no-repeat bg-[url('../assets/Headline.png')] w-96"
          style={{ height: "600px" }}
        >
          <div className="px-4 text-red-600 mx-auto max-w-screen-xl text-left pt-10">
            <h1
              className="text-4xl font-poppins font-semibold"
              style={{ color: "#707070" }}
            >
              Layanan Vaksinasi di Rumah
            </h1>
            <p
              className="font-lg font-poppins font-normal mt-2"
              style={{ color: "#707070" }}
            >
              Keamanan dan Kemudahan Menjaga <br /> Kesehatan Keluarga Anda{" "}
              <strong>100%</strong>
              Diberikan
              <br /> Oleh <strong> Dokter Khusus Vaksinasi</strong>
            </p>
            <div
              className="mt-5 font-bold h-10 w-40 flex items-center justify-center text-white rounded-full cursor-pointer hover:bg-orange-300 p-1"
              style={{ backgroundColor: "#FD8D25" }}
            >
              PESAN SEKARANG
            </div>
          </div>
        </section>
        <section
          className="border-black bg-center bg-no-repeat bg-[url('../assets/Dokter-Pengawas.png')] w-96 h-96 "
          style={{ marginTop: "-265px" }}
        >
          <div className="text-red-600 mx-auto max-w-screen-xl text-right"></div>
        </section>
        {/* <section className="bg-center mt-32 bg-no-repeat bg-[url('../assets/Content.png')] w-96 h-96 ">
          <div className="text-red-600 mx-auto max-w-screen-xl text-right">
            <h1>hello world</h1>
          </div>
        </section> */}
        <section className="-mt-20">
          {/* <Image src={Content} alt="content image" /> */}
          <div className="flex justify-center">
            <h1
              className="p-4 justify-center font-bold text-2xl text-justify"
              style={{ color: "#707070" }}
            >
              Kelebihan Memilih Vaksin <br /> di Rumah dari
              <b style={{ color: "#19A6A0" }}> Cepat Sehat</b>
            </h1>
          </div>
        </section>
        <section className="mt-6">
          <Image src={JadwalVaksin} alt="content image" />
          <div className="flex gap-2 font-medium justify-center">
            <div className="cursor-pointer">
              <a
                href={"/pdf-file/Jadwal-Vaksinasi-Anak.pdf"}
                target="_blank"
                download
                style={{ textDecoration: "none", color: "#256de9" }}
              >
                <FontAwesomeIcon icon={faDownload} />
              </a>
            </div>
            <h1 className="text-center text-blue-500 underline">
              Donwload Jadwal Vaksinasi Anak Umur 0-18 Tahun
            </h1>
          </div>
        </section>
        <section className="mt-6">
          <Image src={JenisVaksin} alt="content image" />
          <div className="flex gap-2 font-medium justify-center">
            <div className="cursor-pointer">
              <a href={"/pdf-file/Jenis-Vaksin-dan-Harga.pdf"} download>
                <FontAwesomeIcon
                  icon={faDownload}
                  style={{ color: "#256de9" }}
                />{" "}
              </a>
            </div>
            <h1 className="text-center text-blue-500 underline">
              Donwload Jenis Vaksin Anak Umur 0-18 Tahun
            </h1>
          </div>
        </section>
        <section className="mt-6">
          <Image src={JadwalImunisasi} alt="content image" />
          <div className="flex gap-2 font-medium justify-center">
            <div className="cursor-pointer">
              <a href={"/pdf-file/Jadwal-Imunisasi.pdf"} download>
                <FontAwesomeIcon
                  icon={faDownload}
                  style={{ color: "#256de9" }}
                />{" "}
              </a>
            </div>
            <h1 className="text-center text-blue-500 underline">
              Donwload Jadwal Imunisasi Anak IDAI 2023
            </h1>
          </div>
        </section>
        <section className="mt-3 p-4">
          <div
            className="rounded-lg flex-col justify-center gap-2"
            style={{
              border: "",
              backgroundColor: "#00BAB9",
              height: "auto",
              padding: "2px",
            }}
          >
            <div className="flex gap-2 p-2 ">
              <div className=" h-full flex justify-end">
                <Image
                  src={Help}
                  alt="help-button"
                  className="w-auto h-5 mt-1"
                />
              </div>
              <div className="text-white font-bold font-poppins text-sm">
                Ada Pertanyaan? Tim kami siap membantu kamu secara langsung
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#00bab9",
                width: "200px",
                height: "30px",
                border: "solid 2px white",
              }}
              className="flex rounded-full gap-1 cursor-pointer text-center font-poppins text-white p-1 mx-auto mb-5 text-xs justify-center"
            >
              <div className="">
                <Image src={WaLogo} alt="wa-log" width={20} />
              </div>
              <h1>Hubungi melalui WhatsApp</h1>
            </div>
          </div>
        </section>
        <footer>
          <div className="flex gap-3 justify-between  w-full p-4 mx-auto">
            <div className="flex-none  w-2/4 gap-2">
              <div className="flex gap-3 items-center">
                <div className="">
                  <Image src={LogoRounded} alt="logo-rounded" height={50} />
                </div>
                <div className="h-full flex-none">
                  <h1 className="font-poppins font-semibold text-lg h-10 items-center flex">
                    Cepat Sehat
                  </h1>
                </div>
              </div>
              <div className="flex justify-end gap-2 pr-24">
                <Image src={FbLogo} alt="fb-logo" className="h-35 w-35" />
                <Image src={IgLogo} alt="ig-logo" className="h-35 w-35" />
              </div>
            </div>
            <div className="h-auto flex-col justify-end  w-full mt-3">
              <h1 className="text-left flex justify-end w-full  font-poppins font-normal text-medium h-16">
                Member of Aliansi Telemedik Indonesia
              </h1>
              <div className=" mt-2">
                <Image
                  src={AvensiLogo}
                  alt="avensi-logo"
                  className="text-center"
                />
              </div>
            </div>
          </div>
          <div className="w-full p-4 mx-auto">
            <div className="flex-none mx-auto w-4/4 gap-2 pl-14">
              <h1 className="font-poppins font-semibold text-lg h-10 items-center flex">
                Alamat Kami
              </h1>
              <h2 className="font-poppins font-thin text-sm">
                <span className="font-poppins font-semibold text-lg">
                  Klinik Cepat
                </span>{" "}
                <br /> Sehat Jl. Peternakan No.13 RT.5/RW.1 Kp.Tengah,Kec.
                <br /> Kramat Jati, Jakarta. Daerah Khusus Ibukota Jakarta 13540
                0822 1118 9009
              </h2>
            </div>
          </div>
          <div className="w-full text-center mt-10">
            <h1>Copyright © 2022 Cepat Sehat. All Rights Reserved</h1>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default Index;
