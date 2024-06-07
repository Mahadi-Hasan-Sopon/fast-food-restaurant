import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [foodItems, setFoodItems] = useState({ Items: [], TotalCount: 0 });

  useEffect(() => {
    fetch(
      "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
    )
      .then((response) => response.json())
      .then((data) => {
        setFoodItems(data);
      })
      .catch((err) => {
        console.log(err?.message || err);
        fetch("/fakeData.json")
          .then((response) => response.json())
          .then((data) => setFoodItems(data));
      });
  }, []);

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
