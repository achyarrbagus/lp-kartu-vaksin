"use client";

import React from "react";
import Head from "next/head";
import Header from "./Header";
import { Button, Navbar } from "flowbite-react";
import NavbarFlow from "@/components/Navbar";

function Layout({
  title,
  back,
  keywords,
  description,
  children,
  headerAction,
}: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta> */}
      </Head>

      <div className="flex flex-col max-w-layout mx-auto min-h-screen overflow-hidden">
        <div style={{ width: "100%" }} className="fixed mx-auto">
          <NavbarFlow />
        </div>
        <main
          className="w-full mx-auto h-auto"
          style={{
            height: "",
            marginTop: "100px",
          }}
        >
          <div
            className="flex justify-center"
            style={{ backgroundColor: "rgb(236 250 248)" }}
          >
            {children}
          </div>
        </main>
      </div>
    </>
  );
}

export default Layout;
