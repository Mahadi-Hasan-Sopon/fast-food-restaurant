import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getStoredIFoodFromLS, saveFoodToLS } from "../utils/localStorage";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [foodItems, setFoodItems] = useState({
    Items: [],
    TotalCount: 0,
    IsApiData: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
        );
        const data = await response.json();

        // getting data from local storage
        const savedFoodInLS = getStoredIFoodFromLS();
        const combinedItems = [...data.Items, ...savedFoodInLS];

        setFoodItems({
          Items: combinedItems,
          TotalCount: combinedItems.length,
          IsApiData: true,
        });
      } catch (err) {
        console.log((err?.message || err) + " from online API.");
        localFoodData();
      }
    };

    const localFoodData = async () => {
      try {
        const localResponse = await fetch("/fakeData.json");
        const localData = await localResponse.json();

        // getting data from local storage
        const savedFoodInLS = getStoredIFoodFromLS();
        const combinedItems = [...localData.Items, ...savedFoodInLS];

        setFoodItems({
          Items: combinedItems,
          TotalCount: combinedItems.length,
          IsApiData: true,
        });
      } catch (localErr) {
        console.error("Error fetching local data:", localErr);
      }
    };

    fetchData();
  }, []);

  const addItem = (item) => {
    saveFoodToLS(item);

    setFoodItems((prevState) => ({
      Items: [...prevState.Items, item],
      TotalCount: prevState.TotalCount + 1,
      IsApiData: prevState.IsApiData,
    }));
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
