const headerOption = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};
const newHeaderOption = {
  ...headerOption,
  method: "POST",
};

export const fetchClient = async (url: string, options = headerOption) => {
  const response = await fetch(url, options);
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
};
