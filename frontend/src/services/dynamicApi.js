 const BASE_URL = "https://ai-app-generator-1-wzxt.onrender.com/api";

export const createRecord = async (entity, data) => {
  const res = await fetch(`${BASE_URL}/${entity}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
};

export const getRecords = async (entity) => {
  const res = await fetch(`${BASE_URL}/${entity}`);
  return res.json();
};