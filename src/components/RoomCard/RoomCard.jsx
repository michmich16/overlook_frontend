import s from './RoomCard.module.scss';

export const RoomCard = ({name, image, info, description, price}) =>{
    return(
        <>
        <section className={s.roomCardStyle}>
            <div className={s.roomImgContainer}>
                <img src={image} alt="" />
            </div>
            <div className={s.roomInfoContainer}>
                <span className={s.roomInfoBox}>
                <h3>{name}</h3>
                <p>{info}</p>
                <p>{description}</p>
                </span>
                <span className={s.roomPriceBox}>
                    <p>{price}</p>
                </span>
            </div>
        </section>
        </>
    )
}