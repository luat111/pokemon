import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import logoImg from '../../img/LogoPoke.png';
import HeaderItem from './HeaderItem/headerItem';
import SearchBar from './SearchLayout/searchLayout';

import { useStyles } from './headerStyle';

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.nav}>
                <Toolbar>
                    <img className={classes.logo} src={logoImg} alt="logo-header" onClick={() => { window.location.reload(); }} />
                    <AppBar position="static" className={classes.nav}>
                        <Toolbar className={classes.containerNav}>
                            <HeaderItem name={"Color"} />
                            <HeaderItem name={"Egg Group"} />
                            <HeaderItem name={"Habitat"} />
                            <SearchBar />
                        </Toolbar>
                    </AppBar>
                </Toolbar>
            </AppBar>
        </div >
    );
}

export default (Header);