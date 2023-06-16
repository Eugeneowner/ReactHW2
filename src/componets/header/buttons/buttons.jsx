import s from '../header.module.scss'
import basketIcon from './img/basket.png'
import favoriteIcon from './img/favorite.png'
const Buttons = (props) => {
    return (
        <div className={s.header_buttons}>
            <button className={s.header_buttons_next}>
                <div className={s.header_buttons_next_count}>
                    <p className={s.header_buttons_next_count_text}>{props.countBuy}</p>
                </div>
                <img className={s.header_buttons_next_img} src={basketIcon} alt="basketIco"/>
            </button>
            <button className={s.header_buttons_next2}>
            <div className={s.header_buttons_next_count}>
                    <p className={s.header_buttons_next_count_text}>{props.countWish}</p>
                </div>
                <img className={s.header_buttons_next2_img2} src={favoriteIcon} alt="fovouriteIcon"/>
            </button>
        </div>
    )
}
export default Buttons 