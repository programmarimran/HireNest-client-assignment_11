import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const UseLayout = () => {
    return (
     <div>
       <header className=" border-b-2 bg-base-300 hover:border-b-blue-300 border-b-gray-300 sticky top-0">
        <div className=" w-11/12 mx-auto">
          <Navbar></Navbar>
        </div>
      </header>
      <main className=" bg-blue-50 ">
      <section className="max-w-7xl mx-auto ">
         <div className=" w-11/12 mx-auto min-h-[calc(100vh-429px)]">
         <Outlet></Outlet>
       </div>
      </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
    );
};

export default UseLayout;