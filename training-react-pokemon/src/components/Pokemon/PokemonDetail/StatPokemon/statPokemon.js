import React from 'react';
import { Typography } from '@material-ui/core';

import { useStyles } from './statPokemonStyle';
function Stat({ nameStat, value }) {
    const classes = useStyles();
    return (
        <>
            <Typography variant='h6' className={classes.statItem} >
                {nameStat}: {value}
            </Typography>
        </>
    )
}

export default (Stat);