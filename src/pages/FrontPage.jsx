import { Slider } from '../components/Slider/Slider'
import { SectionTitle } from '../components/SectionTitle/SectionTitle'
import { MarginContainer } from '../components/MarginContainer/MarginContainer'
import { GridContainer } from '../components/GridContainer/GridContainer'
import { NewsCard } from '../components/NewsCard/NewsCard'
import { useGet } from '../hooks/useGet';

export const FrontPage = () => {
    const { data, isLoading, error } = useGet(
        `http://localhost:4000/news`
    );
    console.log(data);

  

    return (
        <>
            <Slider />
            <GridContainer columns={3} gap={"3rem"}>
                {!isLoading && data?.slice(0,3)
                .map((item) => {
                    let imgPath = `./assets/images`
                            return (
                                <NewsCard
                                    key={item.id}
                                    title={item.title}
                                    link={item.id}
                                    img={`${imgPath}/${item.image.filename}`}
                                />
                            );
                        })}
            </GridContainer>
        </>
    );
};
