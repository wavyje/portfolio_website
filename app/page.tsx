import Image from "next/image";
import Repositories from "./components/projects/repository";
import Link from "next/link";
import projects from "../public/projects.json";
import Overview from "./components/home";

export default function Home() {
  return (
    <main className={"flex min-h-screen flex-col items-center justify-center"}>
      <div className="flex min-h-screen items-center justify-center flex-col space-y-52">
        <div className={"flex flex-col sm:flex-row"}>
          <h1 className={"text-3xl font-bold text-white"}>Jendrik Mann</h1>
          <div className={"mt-14 ml-5"}>
            <h1 className={"text-2xl font-semibold text-white"}>
              full-stack developer
            </h1>
          </div>
        </div>
        <Overview></Overview>
        {/*
        <div className="flex grid text-center lg:max-w-6xl lg:w-full lg:mb-20 lg:grid-cols-5 lg:text-center">
          <div className="group flex flex-col rounded-lg border border-transparent px-5 py-4 transition-colors hover:opacity-30 items-center">
            <img
              className="h-24 w-24 group-hover:-translate-y-6"
              src="/satellite.png"
            />
            <Link href="#space">
              <h2 className={`mb-2 text-2xl font-semibold text-white`}>
                space{" "}
              </h2>
              <p className={`m-0 max-w-[35ch] text-sm opacity-50 text-white`}>
                feature-oriented spacecraft design.
              </p>
            </Link>
          </div>

          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:opacity-30">
            <Link href="#sea">
              <h2 className={`mb-3 text-2xl font-semibold text-white`}>
                sea{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[35ch] text-sm opacity-50 text-white`}>
                polymorphic interface for data translation.
              </p>
            </Link>
          </div>
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:opacity-30">
            <Link href="#health">
              <h2 className={`mb-3 text-2xl font-semibold text-white`}>
                health{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[35ch] text-sm opacity-50 text-white`}>
                mobile app for health certificates.
              </p>
            </Link>
          </div>
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:opacity-30">
            <Link href="#health-backend">
              <h2 className={`mb-3 text-2xl font-semibold text-white`}>
                ledger{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[35ch] text-sm opacity-50 text-white`}>
                ledger backend for the mobile app.
              </p>
            </Link>
          </div>
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:opacity-30">
            <Link href="#web">
              <h2 className={`mb-3 text-2xl font-semibold text-white`}>
                web{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[35ch] text-sm opacity-50 text-white`}>
                this website.
              </p>
            </Link>
          </div>
        </div>
  */}
      </div>
      <Repositories></Repositories>
    </main>
  );
}
