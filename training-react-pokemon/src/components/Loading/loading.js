import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { useStyles } from './loadingStyle';

export default function SimpleBackdrop({ isLoading }) {
    const classes = useStyles();

    return (
        <div>
            <Backdrop className={classes.backdrop} open={isLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}
