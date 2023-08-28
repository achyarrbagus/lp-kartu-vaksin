"use client";

import { Button, Navbar } from "flowbite-react";
import Logo from "../assets/HeaderLogo.png";
import Image from "next/image";

export default function NavbarFlow() {
  return (
    <div className="w-auto max-w-layout">
      <Navbar>
        <Navbar.Brand href="https://flowbite-react.com">
          <Image alt="Flowbite React Logo" className="" src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse>
          <Navbar.Link active href="#">
            <p>Home</p>
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
