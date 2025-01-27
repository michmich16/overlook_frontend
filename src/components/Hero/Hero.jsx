import s from './Hero.module.scss'

export const Hero = ({img, imgAlt}) =>{
    return(
        <>
        <div className={s.heroStyle}>
            <img src={img} alt={imgAlt}/>
        </div>
        </>
    )
}