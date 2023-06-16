import s from "./list.module.scss"
import starIcon from "./img/favorite.png"
// import gohstImg from "./img/ghost.webp"
const ListItem = (props) => {
    const isWish = props.wishList.indexOf(props.id) 
    return (
        <div className={s.main_products_item}>
                <img className={s.main_products_item_img} src={props.img} alt=""/>
                <div className={s.main_products_item_container}>
                    <p className={s.main_products_item_container_name}>{props.name}</p>
                    <p className={s.main_products_item_container_price}>{props.price} $</p>
                    {isWish === -1 ? 
                    <button onClick = {() =>{props.handleWish(props.id)}} className={s.main_products_item_container_btn}>Add to wish</button> 
                    :
                    <button className={s.main_products_item_container_btn}>
                        <img className={s.main_products_item_container_btn_img} src={starIcon} alt="star" />
                    </button> }
                    
                    <button onClick = {()=>{props.handleBuy(props.id)}} className={s.main_products_item_container_btn}>Buy now</button>
                    
                </div>
                
        </div>
    )
}

export default ListItem