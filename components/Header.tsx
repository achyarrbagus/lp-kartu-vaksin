"use client";

import React from "react";
import Link from "next/link";

function Header({ headerTitle, headerBack, headerAction }: any) {
  return (
    <header className="fixed top-0 left-0 w-full h-14 z-30">
      <div
        style={{ maxWidth: "480px" }}
        className="container mx-auto  flex flex-row justify-center items-center h-full bg-primary-700"
      >
        <div>
          <h1>menu 1</h1>
        </div>
        <div className="w-6/12">
          <h2>menu 2</h2>
        </div>
        <div className="w-3/12">
          {/* <div className='flex justify-center items-center w-full h-full'>
                        {(headerTitle == "Home") &&
                            <FlagComp />
                        }
                        {(headerAction == "endchat") &&
                            <ChatLeave />
                        }
                    </div> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
