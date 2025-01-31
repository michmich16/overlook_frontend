import { useParams } from "react-router-dom"
import { useState } from "react";
import { useGet } from "../hooks/useGet";
import { FilterBar } from "../components/FilterBar/FilterBar";
import { Slider } from "../components/Slider/Slider";
import { MarginContainer } from "../components/MarginContainer/MarginContainer";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { NewsCard } from "../components/NewsCard/NewsCard";

export const CountryPage = () =>{
    const {country} = useParams()
    const [cityData, setCityData] = useState();
    const { isLoading, error, data } = useGet(`http://localhost:4000/destinations/${country}`);
    console.log(data)

    return(
        <>
<Slider text="HOTELLER & DESTINATIONER" height="400px" />
      <MarginContainer>
        <GridContainer columns="1fr 1fr 1fr" gap="2rem">
          {!isLoading && data?.cities?.map((city) => (
                <NewsCard
                key={city.city_id}
                title={city.name}
                link={city.slug}
                 img={`/images/${city.CityImage.city_image_filename}`}
                path={`/city/${city.slug}`}
                />
                ))}
        </GridContainer>
      </MarginContainer>
        </>
    )
}