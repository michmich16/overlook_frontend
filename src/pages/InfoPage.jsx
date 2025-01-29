import { FilterBar } from "../components/FilterBar/FilterBar";
import { useState, useEffect } from "react";
import { useGet } from "../hooks/useGet";
import { Slider } from "../components/Slider/Slider";
import { SectionTitle } from "../components/SectionTitle/SectionTitle";
import { MarginContainer } from "../components/MarginContainer/MarginContainer";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { NewsCard } from "../components/NewsCard/NewsCard";

export const InfoPage = () => {
    const filters = ["danmark", "sverige", "norge", "finland", "island", "tyskland", "polen"];
    const [selectedCountry, setSelectedCountry] = useState("danmark");
    const [countriesData, setCountriesData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllCountries = async () => {
            try {
                const allData = {};
                for (const country of filters) {
                    const response = await fetch(`http://localhost:4000/destinations/${country}`);
                    const data = await response.json();
                    allData[country] = data;
                }
                setCountriesData(allData);
            } catch (err) {
                setError(err.message || "Error loading destinations.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchAllCountries();
    }, []);

    const handleFilterChange = (country) => {
        setSelectedCountry(country);
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    const selectedData = countriesData[selectedCountry];

    return (
        <>
            <Slider text="HOTELLER & DESTINATIONER" height="400px" />
            <FilterBar filters={filters} onFilterChange={handleFilterChange} />

            <MarginContainer>
                {selectedData && (
                    <SectionTitle title={`Vores hotel i ${selectedData.name}`} />
                )}
                <GridContainer columns="1fr 1fr 1fr" gap="2rem">
                    {selectedData?.cities.map((city) => (
                        <NewsCard
                            key={city.city_id}
                            title={city.name}
                            link={city.slug}
                            img={`./images/${city.CityImage.city_image_filename}`}
                        />
                    ))}
                </GridContainer>
            </MarginContainer>
        </>
    );
};
