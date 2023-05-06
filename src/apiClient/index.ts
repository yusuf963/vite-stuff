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

export const fetchClient = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
