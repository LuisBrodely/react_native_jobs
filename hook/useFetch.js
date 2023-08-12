// import { useState, useEffect } from "react";
// import axios from "axios";

// const useFetch = (endpoint, query) => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const options = {
//     method: "GET",
//     url: `https://jsearch.p.rapidapi.com/${endpoint}`,
//     headers: {
//       "X-RapidAPI-Key": '05749ef5a4msh4a541c9c1495edcp14e0abjsn06232d825f8d',
//       "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
//     },
//     params: {
//       ...query
//     },
//   };

//   const fetchData = async () => {
//     setIsLoading(true);

//     try {
//       const response = await axios.request(options);

//       setData(response.data.data);
//       setIsLoading(false);
//       console.log(data)
//     } catch (error) {
//       setError(error);
//       console.log(error)
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const refetch = () => {
//     setIsLoading(true);
//     fetchData();
//   };

//   return { data, isLoading, error, refetch };
// };

// export default useFetch;