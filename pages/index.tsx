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
      <div className="p-4">
        <section className="bg-center bg-no-repeat bg-[url('../assets/Headline.png')] w-96 h-96 ">
          <div className="px-4 text-red-600 mx-auto max-w-screen-xl text-right pt-24 lg:pt-56"></div>
        </section>
        <section className="border-black bg-center -mt-32 bg-no-repeat bg-[url('../assets/Dokter-Pengawas.png')] w-96 h-96 ">
          <div className="text-red-600 mx-auto max-w-screen-xl text-right"></div>
        </section>
        {/* <section className="bg-center mt-32 bg-no-repeat bg-[url('../assets/Content.png')] w-96 h-96 ">
          <div className="text-red-600 mx-auto max-w-screen-xl text-right">
            <h1>hello world</h1>
          </div>
        </section> */}
        <section className="-mt-20 ">
          <Image src={Content} alt="content image" />
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
              <a href={"/pdf-file/Jeins-Vaksin-dan-Harga.pdf"} download>
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
              <a href={"/public/pdf-file/jadwal-imunisasi-2023.pdf"} download>
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
        <section className="mt-6">
          <div className="flex font-medium justify-center">
            <Image src={AskQuestion} alt="content image" />
          </div>
        </section>
        <footer className="mt-12">
          <div className="flex font-medium justify-center ">
            <Image src={Alamat} width={"1000"} alt="content image" />
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default Index;
