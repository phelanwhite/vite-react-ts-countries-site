import { CountryCardType } from "@/types";
import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ data }: { data: CountryCardType }) => {
  return (
    <Link
      to={`/${data.cca2}`}
      className="shadow hover:shadow-md rounded overflow-hidden bg-[--element-color]"
    >
      <div className="aspect-video">
        <img src={data.flags.png} alt={data.flags.alt} loading="lazy" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-3">{data.name.common}</h2>
        <p>
          <span className="font-semibold">Population:</span> {data.population}
        </p>
        <p>
          <span className="font-semibold">Region:</span> {data.region}
        </p>
        <p>
          <span className="font-semibold">Capital:</span>{" "}
          {data.capital?.join(", ")}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
