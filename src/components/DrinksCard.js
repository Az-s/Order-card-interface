import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import EspressoImg from '../assets/coffee-drinks_espresso.webp';
import AmericanoImg from '../assets/coffee-drinks_americano.jpg';
import MacchiatoImg from '../assets/coffee-drinks_americano.jpg';
import MochaImg from '../assets/coffee-drinks_americano.jpg';
import CafelatteImg from '../assets/coffee-drinks_americano.jpg';
import AffogatoImg from '../assets/coffee-drinks_americano.jpg';
import './DrinksCard.css'
import Orders from './Orders';

const DRINKS = {
    Espresso: { name: 'Espresso', price: 100, quantity: 0, img: EspressoImg },
    Americano: { name: 'Americano', price: 120, quantity: 0, img: AmericanoImg },
    Macchiato: { name: 'Macchiato', price: 130, quantity: 0, img: MacchiatoImg },
    Mocha: { name: 'Mocha', price: 130, quantity: 0, img: MochaImg },
    CafeLatte: { name: 'Cafe-Latte', price: 110, quantity: 0, img: CafelatteImg },
    Affogato: { name: 'Affogato', price: 140, quantity: 0, img: AffogatoImg },
};

const DrinksCard = () => {

    const [orderCard, setOrderCard] = useState({
        espresso: 0,
        americano: 0,
        macchiato: 0,
        mocha: 0,
        cafelatte: 0,
        affogato: 0,
    });

    const [totalPrice, setTotalPrice] = useState(0);

    const [quanity, setQuanity] = useState(0);

    const addCard = type => {
        const price = orderCard[type];
        const changePrice = price + 1;
        const changeCard = { ...orderCard };
        changeCard[type] = changePrice;
        const addToPrice = DRINKS[type].price;
        const priceCount = totalPrice + addToPrice;

        const addToQuan = DRINKS[type].quantity;
        const quani = quanity + addToQuan;

        setOrderCard(changeCard);
        setQuanity(quani)
        setTotalPrice(priceCount);
    };

    const removeCard = type => {
        const price = orderCard[type];
        const changePrice = price - 1;
        const changeCard = { ...orderCard };
        changeCard[type] = changePrice;
        const addToPrice = DRINKS[type].price;
        const priceCount = totalPrice - addToPrice;
        
        setOrderCard(changeCard);
        setTotalPrice(priceCount);
    };

    return (
        <div className='Cards'>
            <h3>Add coffee type</h3>
            <div className='CardItems'>
                {Object.keys(DRINKS).map((drinksKey) => (
                    <>
                        <Card className='card' onClick={() => addCard(drinksKey)}>
                            <CardActionArea>
                                <CardMedia
                                    image={DRINKS[drinksKey].img}
                                    title="Contemplative Reptile"
                                />
                                <img className='img' src={DRINKS[drinksKey].img} alt={DRINKS[drinksKey].name}></img>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {DRINKS[drinksKey].name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Price: {DRINKS[drinksKey].price} KGS
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        {/* <Orders totalPrice={totalPrice} 
                                removeCard={removeCard} 
                                id={drinksKey} 
                                name={DRINKS[drinksKey].name}
                                quanity={quanity}
                                price={DRINKS[drinksKey].price}
                        /> */}
                    </>
                ))}
            </div>
        </div>
    )
}

export default DrinksCard;
