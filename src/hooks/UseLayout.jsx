import React, { use, useEffect } from "react";
import Navbar from "../shared/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../shared/Footer";
import ServiceContext from "../contexts/ServiceContext";
import Loading from "../components/Loading";
import AOS from "aos";
import "aos/dist/aos.css";
const UseLayout = () => {
  const navigation = useNavigation();
  const { darkIstrue } = use(ServiceContext);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    AOS.refreshHard(); // when theme changes
  }, [darkIstrue]);

  useEffect(() => {
    if (navigation.state !== "loading") {
      AOS.refreshHard(); // refresh again after page loads
    }
  }, [navigation.state]);

  return (
    <div>
      <header className=" border-b-2 bg-base-300 hover:border-b-blue-300 border-b-gray-300 sticky top-0 z-10">
        <div className=" w-11/12 mx-auto">
          <Navbar></Navbar>
        </div>
      </header>
      <main className={`bg-gray-50 dark:bg-gray-900`}>
        <section className="max-w-7xl mx-auto ">
          <div className=" w-11/12 mx-auto min-h-[calc(100vh-429px)]">
            {navigation.state === "loading" ? (
              <Loading></Loading>
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
