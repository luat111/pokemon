import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import logoImg from '../../img/LogoPoke.png';
import HeaderItem from './HeaderItem/headerItem';
import SearchBar from './SearchLayout/searchLayout';
import { Link } from 'react-router-dom';
import { useStyles } from './headerStyle';
const Header = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root} id='header'>
            <AppBar position="static" className={classes.nav}>
                <Toolbar>
                    <Link to={{ pathname: '/pokemon' }}>
                        <img className={classes.logo} src={logoImg} alt="logo-header" />
                    </Link>
                    <AppBar position="relative" className={classes.nav}>
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