"use client"
import { useQuery } from "react-query";
import axios from "axios";

const fetchMatches = async (date) => {
  const response = await axios.get(`/api/matches`, {
    params: { date }, // Pass the date as a query parameter
  });
  return response.data; // Assuming the response data contains the matches
};

export const useMatches = (date) => {
  return useQuery(
    ["matches", date], // Use both "matches" and the date as the query key
    () => fetchMatches(date), // Pass the date to fetchMatches
    {
      enabled: !!date, // Only fetch if a date is provided (non-falsy value)
      staleTime: 60000, // Optionally set a stale time for caching
    }
  );
};
