import React, { use } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import ServiceContext from "../contexts/ServiceContext";

const UseLayout = () => {
  const navigation = useNavigation();
  const { darkIstrue } = use(ServiceContext);
  return (
    <div>
      <header className=" border-b-2 bg-base-300 hover:border-b-blue-300 border-b-gray-300 sticky top-0 z-10">
        <div className=" w-11/12 mx-auto">
          <Navbar></Navbar>
        </div>
      </header>
      <main className={`${darkIstrue ? "bg-slate-800" : "bg-slate-100"}`}>
        <section className="max-w-7xl mx-auto ">
          <div className=" w-11/12 mx-auto min-h-[calc(100vh-429px)]">
            {navigation.state === "loading" ? (
              <p className=" text-red-500">loadingloadingloadingloading</p>
            ) : (
              <Outlet></Outlet>
            )}
          </div>
        </section>
      </main>
      <footer className=" bg-base-300 shadow-md border-t border-gray-200">
       <section className=" max-w-7xl mx-auto">
         <div className=" w-11/12 mx-auto">
          <Footer></Footer>
        </div>
       </section>
      </footer>
    </div>
  );
};

export default UseLayout;
