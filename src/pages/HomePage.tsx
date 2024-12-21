import CountryCard from "@/components/CountryCard";
import Loader from "@/components/loader";
import { CountryCardType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";

const HomePage = () => {
  const getCountriesResult = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
      return response.data;
    },
  });

  const getRegionData = useMemo(() => {
    const regionData = new Map([["Filter by region", ""]]);
    getCountriesResult.data?.forEach((country: CountryCardType) => {
      if (!regionData.has(country.region)) {
        regionData.set(country.region, country.region);
      }
    });
    return Array.from(regionData);
  }, [getCountriesResult.data]);

  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchCountry, setSearchCountry] = useState("");

  const getCountriesData = useMemo(() => {
    return (
      getCountriesResult.data?.filter((country: CountryCardType) => {
        if (selectedRegion) {
          return (
            country.region === selectedRegion &&
            country.name.common
              .toLowerCase()
              .includes(searchCountry.toLowerCase())
          );
        } else {
          return country.name.common.includes(searchCountry.toLowerCase());
        }
      }) || []
    );
  }, [getCountriesResult.data, selectedRegion, searchCountry]);

  return (
    <>
      {getCountriesResult.isLoading && <Loader />}
      <div className="text-home-font-size">
        {/* search and filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-10">
          {/* search input */}
          <div className="sm:w-max w-full flex items-center gap-2 px-4 bg-[--element-color] shadow rounded overflow-hidden">
            <FaSearch />
            <input
              className="border-none outline-none py-2 bg-transparent flex-1"
              type="text"
              placeholder="Search for a country..."
              value={searchCountry}
              onChange={(e) => setSearchCountry(e.target.value)}
            />
          </div>
          {/* region dropdown */}
          <div className="sm:w-max w-full flex items-center gap-2 px-4 bg-[--element-color] shadow rounded overflow-hidden">
            <select
              name=""
              id=""
              className="border-none outline-none py-2 bg-transparent w-full"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              {getRegionData.map(([key, value]) => (
                <option
                  key={key}
                  value={value}
                  className="bg-[--element-color]"
                >
                  {key}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* list  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {getCountriesData?.map((country: CountryCardType) => (
            <CountryCard key={country.cca2} data={country} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
