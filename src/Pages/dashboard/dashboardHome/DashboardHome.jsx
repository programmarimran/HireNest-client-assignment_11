import { FaHeart, FaClipboardList, FaCogs } from "react-icons/fa";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router";
import DashboardCard from "./dashboardCard/DashboardCard";
import AuthContext from "../../../contexts/AuthContext";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [allRecipe, setAllRecipe] = useState([]);
  const [wishlistRecipes, setWishlistRecipes] = useState([]);
  const [myRecipes, setMyRecipes] = useState([]);

  const baseURL = import.meta.env.VITE_serverBaseURL;

  // fetch total recipes
  useEffect(() => {
    fetch(`${baseURL}/recipes`)
      .then((res) => res.json())
      .then((data) => setAllRecipe(data));
  }, [baseURL]);

  // fetch wishlist recipes
  useEffect(() => {
    if (user?.email) {
      fetch(`${baseURL}/wishlist/recipes?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setWishlistRecipes(data));
    }
  }, [baseURL, user]);

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
          value={wishlistRecipes?.length || 0}
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
