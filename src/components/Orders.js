import React from 'react';
import { Grid, Paper, Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './Orders.css';

const Orders = ({ totalPrice, removeCard, id, name, quantity, price , orderCard }) => {
    // {Object.keys(DRINKS).map(drinksKey => (
    //     <p id={drinksKey}>{DRINKS[drinksKey].name} x{DRINKS[drinksKey].quantity} Price:{DRINKS[drinksKey].price * DRINKS[drinksKey]}</p>
    //   ))}
    return (
        <div className='Orders'>
            <h3>Order details</h3>
            {/* {Object.keys(DRINKS).map(drinksKey => ( */}
                <>
                    <Grid justify='space-between' alignItems='center'>
                        <Paper className='Orderinfo' component={Box} p={1} m={1}>
                            {name} x{quantity} Price:{price} KGS
                            <IconButton aria-label="delete" onClick={() => removeCard(id)}>
                                <DeleteIcon />
                            </IconButton>
                        </Paper>

                    </Grid>
                    <Paper component={Box} p={2} m={1}>
                        <strong>Price: {totalPrice} KGS</strong>
                    </Paper>
                </>
            {/* ))} */}

        </div>
    )
}

{/* <Grid   justify='space-between' alignItems='center'>
<Paper className='Orderinfo' component={Box} p={1} m={1}>
    {name} x {quantity}  {price} KGS
    <IconButton aria-label="delete" onClick={() => removeCard(id)}>
        <DeleteIcon />
    </IconButton>
</Paper>

</Grid>
<Paper component={Box} p={2} m={1}>
<strong>Price: {totalPrice} KGS</strong>
</Paper> */}

export default Orders;
