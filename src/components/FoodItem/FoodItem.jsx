//react
import PropTypes from 'prop-types'
import { useContext } from 'react'

// assets
import { assets } from '../../assets/assets'

// context
import { StoreContext } from '../../context/StoreContext'

// component
import './FoodItem.css'

const FoodItem = ({id, name, price, description, image}) => {

const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt="" />
                {
                    !cartItems[id] ? 
                    <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" /> : 
                    <div className="food-item-counter">
                        <img onClick={()=> removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={()=> addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    )
}

    FoodItem.propTypes = {
        id:PropTypes.any ,
        name: PropTypes.string.isRequired, 
        price: PropTypes.number, 
        description: PropTypes.string, 
        image: PropTypes.any
    }

export default FoodItem