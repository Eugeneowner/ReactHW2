import s from './list.module.scss'
import ListItem from './listItem'

const List = (props) => {
    const AutoColliections = props.auto.map(autoItem => {
        return (
            <ListItem
                handleBuy = {props.handleBuy}
                handleWish = {props.handleWish}
                id = {autoItem.id} 
                img={autoItem.img} 
                name={autoItem.name}
                price={autoItem.price}
                wishList = {props.wishList}
            />
        )
    })
    return (
        <div className={s.main_products}>
            {AutoColliections}
        </div>
    )
}

export default List