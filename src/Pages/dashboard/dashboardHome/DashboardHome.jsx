import { FaHeart, FaClipboardList, FaCogs } from "react-icons/fa";
import { useEffect, useState, useContext } from "react";
import { Link, useLoaderData } from "react-router";
import DashboardCard from "./dashboardCard/DashboardCard";
import AuthContext from "../../../contexts/AuthContext";
import axios from "axios";

const DashboardHome = () => {
  const { user,logoutUser } = useContext(AuthContext);
  const allRecipe = useLoaderData();
  const [bookedServices, setBookedServices] = useState([]);
  const [myRecipes, setMyRecipes] = useState([]);
  const baseURL = import.meta.env.VITE_BasicServer;

  const [bookedLoading,setBookedLoading]=useState(true)

  // fetch wishlist recipes
  useEffect(() => {
    setTimeout(() => {
      axios
        .get(
          `${import.meta.env.VITE_BasicServer}/users/booked/services?email=${
            user?.email
          }`,
          { withCredentials: true }
        )
        //********token handling start******* */
        .then((res) => {
          // console.log(res.status);
          setBookedLoading(false);
          setBookedServices(res?.data);
        })
        .catch((error) => {
          // console.log(error.status);
          if (error.status === 401 || error.status === 403) {
            logoutUser();
          }
        });
    }, 1000);
    //********token handling end********* */
  }, []);

  // fetch my recipes
  useEffect(() => {
    if (user?.email) {
      fetch(`${baseURL}/my-recipes?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyRecipes(data));
    }
  }, [baseURL, user]);

  return (
    <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Link to="/dashboard/all-services">
        <DashboardCard
          title="Total Services"
          value={allRecipe?.length || 0}
          icon={<FaCogs className="text-3xl text-blue-600" />}
        />
      </Link>

      <Link to="/dashboard/booked-services">
        <DashboardCard
          title="Booked Services"
          bookedLoading={bookedLoading}
          value={bookedLoading?"not-showing":bookedServices?.length || 0}
          icon={<FaHeart className="text-3xl text-rose-500" />}
        />
      </Link>

      <Link to="/dashboard/manage-service">
        <DashboardCard
          title="Manage Services"
          value={myRecipes?.length || 0}
          icon={<FaClipboardList className="text-3xl text-emerald-500" />}
        />
      </Link>
    </div>
  );
};

export default DashboardHome;
