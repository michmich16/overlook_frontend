import { InputField } from '../components/InputField/InputField'
import { GridContainer } from '../components/GridContainer/GridContainer'
import { MarginContainer } from '../components/MarginContainer/MarginContainer'
import { SectionTitle } from '../components/SectionTitle/SectionTitle'

export const LoginPage = () => {
    return (
        <>
            <GridContainer columns="3fr 1fr">
                <MarginContainer>
                    <InputField />
                    <InputField />
                </MarginContainer>
                <MarginContainer>
                </MarginContainer>
            </GridContainer>

        </>
    )
}