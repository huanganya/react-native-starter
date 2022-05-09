import { useEffect, useState } from "react";
import yelp from "../api/yelp";
import { useNetworkStatusEffect } from "./useNetworkStatusEffect";

export default () => {
  const { isNetworkConnected } = useNetworkStatusEffect();

  const [results, setResults] = useState<{ id: string; name: string }[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm: string): Promise<void> => {
    console.log("Hi there!");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    setErrorMessage(
      isNetworkConnected
        ? ""
        : "network is disconnted now. Please try again later.",
    );
  }, [isNetworkConnected, setErrorMessage]);

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return { results, searchApi, errorMessage };
};
