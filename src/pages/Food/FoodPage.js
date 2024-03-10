import React, { useEffect, useState } from "react";
import classes from './foodPage.module.css'
import { useNavigate, useParams } from "react-router-dom";
import { getByID } from "../../services/foodService";
import Tags from "../../components/Tags/Tags";
import Price from "../../components/Price/Price";
import { useCart } from "../../hooks/useCart";
import NotFound from "../../components/NotFound/NotFound";



export default function FoodPage() {
    const [food, setFood] = useState({}); /* Initialising state variable 'food' using 'useState' */
    const {id} = useParams(); /* Extracts the 'id' parameter from the URL using the 'useParams' hook provided by ReactRouter. The 'id' parameter is used to identify the specific food item to fetch */
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const handleAddToCart = () => {
        addToCart(food);
        navigate('/cart');
    };
//'useEffect' hook is triggered when the 'id' parameter changes, it calls the 'getByID' function with the 'id' parameter to fetch the detaisl of the food item. When data is fetched it updates the 'food' state using the 'setFood' Function.
    useEffect(() => {
        getByID(id).then(setFood);
    }, [id]);
  return ( 
    <>
{/* if food is not available, error message will pop up  */}
        {!food? (<NotFound message='Food Unavailable!' linkText="Back To Home"/>
        ) : (
            <div className={classes.container}>
                <img
                    className={classes.image}
                    src={`/foods/${food.imageUrl}`}
                    alt={food.name}
                />

                <div className={classes.details}>
                    <div className={classes.header}>
                        <span className={classes.name}>{food.name}</span>
                    </div>


                        <div className={classes.ingredients}>
                            {food.ingredients?.map(ingredients => ( 
                                <span key={ingredients}>{ingredients}</span>
                            ))}
                        </div>

                        <div className={classes.tags}>
                            {food.tags && (
                                <Tags
                                    tags={food.tags.map(tag => ({ name: tag }))}
                                    forFoodPage={true}
                                />
                            )}
                        </div>

                        <div className={classes.cook_time}>
                            <span>
                                Time to prepare from scratch <strong>{food.cookTime}</strong> minutes
                            </span>
                        </div>

                        <div className={classes.price}>
                            <Price price={food.price}/>
                        </div>

                        <button onClick={handleAddToCart}>Add To Cart</button>
                </div>
            </div>
        )}
    </>
  );  
}