//   useEffect(() => {
//     setTimeout(() => {
//       axios
//         .get(
//           `${import.meta.env.VITE_BasicServer}/users/booked/services?email=${
//             user?.email
//           }`,
//           { withCredentials: true }
//         )
//         //********token handling start******* */
//         .then((res) => {
//           // console.log(res.status);
//           setLoading(false);
//           setBookedServices(res?.data);
//         })
//         .catch((error) => {
//           // console.log(error.status);
//           if (error.status === 401 || error.status === 403) {
//             logoutUser();
//           }
//         });
//     }, 1000);
//     //********token handling end********* */
//   }, []);