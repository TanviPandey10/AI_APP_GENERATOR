 const BASE_URL = "http://localhost:5000/api";

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