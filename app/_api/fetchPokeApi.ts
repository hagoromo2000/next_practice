import useSWR from "swr";
const BASE_URL = "https://pokeapi.co/api/v2/";

export const usePokeAPI = (endpoint: string) => {
  const url = `${BASE_URL}${endpoint}`;
  const { data, error, isLoading } = useSWR(url, fetch);
  return {
    fetchdata: data,
    error,
    isLoading,
  };
};
