import React, { useEffect } from "react";

import UseLayout from "../hooks/UseLayout";
import AOS from "aos";
import "aos/dist/aos.css";
const DashboardLayout = () => {
   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return <UseLayout></UseLayout>;
};

export default DashboardLayout;
