import React from 'react';
import { Grid, Paper, Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './Orders.css';

const Orders = ({ totalPrice , removeCard }) => {
    return (
        <div className='Orders'>
            <h3>Order details</h3>
            <Grid   justify='space-between' alignItems='center'>
                <Paper className='Orderinfo' component={Box} p={1} m={1}>
                    awe
                    <IconButton aria-label="delete" onClick={removeCard}>
                        <DeleteIcon />
                    </IconButton>
                </Paper>

            </Grid>
            <Paper component={Box} p={2} m={1}>
                <strong>Price: {totalPrice} KGS</strong>
            </Paper>
        </div>
    )
}

export default Orders;
