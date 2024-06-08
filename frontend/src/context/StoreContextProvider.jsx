import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [foodItems, setFoodItems] = useState({ Items: [], TotalCount: 0 });
  // const [localFoodData, setLocalFoodData] = useState({
  //   Items: [],
  //   TotalCount: 0,
  // });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
        );
        const data = await response.json();
        setFoodItems(data);
      } catch (err) {
        console.log((err?.message || err) + " from online API.");
        localFoodData();
      }
    };

    const localFoodData = async () => {
      try {
        const localResponse = await fetch("/fakeData.json");
        const localData = await localResponse.json();
        setFoodItems(localData);
      } catch (localErr) {
        console.error("Error fetching local data:", localErr);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const localFoodData = async () => {
  //     try {
  //       const localResponse = await fetch("/fakeData.json");
  //       const localData = await localResponse.json();
  //       setLocalFoodData(localData);
  //     } catch (localErr) {
  //       console.error("Error fetching local data:", localErr);
  //     }
  //   };
  //   localFoodData();
  // }, []);

  const addItem = (item) => {
    setFoodItems({
      Items: [...foodItems.Items, item],
      TotalCount: foodItems.TotalCount + 1,
    });
  };

  return (
    <StoreContext.Provider value={{ foodItems, addItem }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
