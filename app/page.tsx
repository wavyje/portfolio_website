import Repositories from "./components/projects/repository";
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
      </div>
      <Repositories></Repositories>
    </main>
  );
}
