export const getStoredIFoodFromLS = () => {
  const orderedServiceIds = localStorage.getItem("foodItems");

  if (orderedServiceIds) {
    return JSON.parse(orderedServiceIds);
  } else {
    return [];
  }
};

export const saveFoodToLS = async (foodDetails) => {
  const storedIds = await getStoredIFoodFromLS("foodItems");
  storedIds.push(foodDetails);

  return localStorage.setItem("foodItems", JSON.stringify(storedIds));
};
