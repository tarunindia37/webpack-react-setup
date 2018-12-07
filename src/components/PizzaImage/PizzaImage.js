import React from 'react';

import classes from './PizzaImage.css';
import PizzaImage from './../../assests/pizza.jpg';

const pizzaImage = (props) => {
    return (
        <div className={classes.PizzaImage}>
            <img src={PizzaImage} className={classes.PizzaImg} />
        </div>
    );
}

export default pizzaImage;