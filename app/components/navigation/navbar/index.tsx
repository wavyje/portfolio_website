import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="h-20 bg-transparent sticky top-0">
        <div className="mx-40 h-full">
          <div className="flex items-center h-full">
            <ul className="hidden md:flex lg:flex gap-x-6 text-white justify-start">
              <li className="hover:opacity-30">
                <Link href="/">
                  <p>home</p>
                </Link>
              </li>
              <li className="hover:opacity-30">
                <Link href="#space">
                  <p>space</p>
                </Link>
              </li>
              <li className="hover:opacity-30">
                <Link href="#sea">
                  <p>sea</p>
                </Link>
              </li>
              <li className="hover:opacity-30">
                <Link href="#health">
                  <p>health</p>
                </Link>
              </li>
              <li className="hover:opacity-30">
                <Link href="#ledger">
                  <p>ledger</p>
                </Link>
              </li>
              <li className="hover:opacity-30">
                <Link href="#web">
                  <p>web</p>
                </Link>
              </li>
            </ul>
            <div className={"inline-flex w-full justify-end"}>
              <hr className={"w-1/6 h-1 mt-7 bg-white rounded"} />
              <div className="absolute px-9 bg-transparent">
                <a href="https://github.com/wavyje">
                  <svg
                    className="w-6 h-6 text-white hover:opacity-30"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <div className="absolute px-1 bg-transparent">
                <a href="https://linkedin.com/in/jendrik-mann-1b39a7213">
                  <svg
                    className="w-6 h-6 text-white hover:opacity-30"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z"
                      clipRule="evenodd"
                    />
                    <path d="M7.2 8.8H4v10.7h3.2V8.8Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
