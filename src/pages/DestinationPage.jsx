import { useState, useEffect } from "react";
import { FilterBar } from "../components/FilterBar/FilterBar";
import { Slider } from "../components/Slider/Slider";
import { MarginContainer } from "../components/MarginContainer/MarginContainer";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { NewsCard } from "../components/NewsCard/NewsCard";
import { useGet } from "../hooks/useGet";

export const DestinationPage = () => {
  const { isLoading, error, data } = useGet(`http://localhost:4000/destinations/`);

  return (
    <>
      <Slider text="HOTELLER & DESTINATIONER" height="400px" />
      {!isLoading && data && (
        <FilterBar
          filters={data.map((country) => country.name)} 
        />
      )} 
      <MarginContainer>
        <GridContainer columns="1fr 1fr 1fr" gap="2rem">
          {!isLoading &&
            data?.map((city) => (
                <NewsCard
                key={city.city_id}
                title={city.name}
                link={city.slug}
                path={`/city/${city.slug}`}
                />
                ))}
        </GridContainer>
      </MarginContainer>
    </>
  );
};
