import Loader from "@/components/loader";
import { CountryDetailType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useMemo } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const CountryDetailPage = () => {
  const { code } = useParams();
  const getCountryResult = useQuery({
    queryKey: ["country", code],
    queryFn: async () => {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${code}`
      );
      return response.data;
    },
    enabled: !!code,
  });

  const getCountriesData = useMemo(() => {
    return getCountryResult.data?.[0] as CountryDetailType;
  }, [getCountryResult.data]);
  return (
    <>
      {getCountryResult.isLoading && <Loader />}
      <div className="text-single-font-size">
        {/* top  */}
        <div className="mb-10">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-[--element-color] px-5 py-1 rounded shadow hover:shadow-md text-sm"
          >
            <FaArrowLeft />
            Back
          </button>
        </div>
        {/* country details  */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-8">
          {/* image  */}
          <div className="flex-[2] aspect-video overflow-hidden w-full">
            <img
              src={getCountriesData?.flags?.png}
              alt={getCountriesData?.flags?.alt}
              loading="lazy"
            />
          </div>
          {/* details  */}
          <div className="flex-[3] space-y-10">
            <h2 className="text-xl font-bold">
              {getCountriesData?.name?.common}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <p>
                <span className="font-semibold">Native Name:</span>{" "}
                {getCountriesData?.name?.nativeName &&
                  Object.values(getCountriesData?.name?.nativeName)
                    ?.map((item) => item.common)
                    ?.join(", ")}
              </p>
              <p>
                <span className="font-semibold">Top Level Domain:</span>{" "}
                {getCountriesData?.tld?.join(", ")}
              </p>
              <p>
                <span className="font-semibold">Population:</span>{" "}
                {getCountriesData?.population}
              </p>
              <p>
                <span className="font-semibold">Currencies:</span>{" "}
                {getCountriesData?.currencies &&
                  Object.values(getCountriesData?.currencies)
                    ?.map((item) => item.name)
                    ?.join(", ")}
              </p>
              <p>
                <span className="font-semibold">Region:</span>{" "}
                {getCountriesData?.region}
              </p>
              <p>
                <span className="font-semibold">Languages:</span>{" "}
                {getCountriesData?.languages &&
                  Object.values(getCountriesData?.languages)?.join(", ")}
              </p>
              <p>
                <span className="font-semibold">Sub Region:</span>{" "}
                {getCountriesData?.subregion}
              </p>
              <p>
                <span className="font-semibold">Capital:</span>{" "}
                {getCountriesData?.capital?.join(", ")}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3">
              <span className="font-semibold">Border Countries:</span>{" "}
              {getCountriesData?.borders?.map((item) => (
                <Link
                  key={item}
                  to={`/${item}`}
                  className="bg-[--element-color] px-5 py-1 rounded shadow hover:shadow-md text-sm inline-block"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetailPage;
