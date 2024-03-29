import MealItemForm from "./MealItemForm";
import classes from './MealItems.module.css';

const MealItems = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    
    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
            </div>
            <div className={classes.description}>
                {props.description}
            </div>
            <div className={classes.price}>
                {price}
            </div>
            <div>
                < MealItemForm />
            </div>
        </li>
    )
}

export default MealItems