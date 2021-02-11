import { AppBar, Grid, Toolbar } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { apiUrl } from "../../constraints/index";
import logoImg from '../../img/LogoPoke.png';
import { searchPokemonByName } from "../../redux/actions/searchPokemonAction";
import HeaderItem from './HeaderItem/headerItem';
import { useStyles } from './headerStyle';
import SearchBar from './SearchLayout/searchLayout';
const Header = ({ listSearchedPokemon, searchPokemonByName }) => {
    const classes = useStyles();

    const handleChange = (e) => {
        const { value } = e.target;
        let url = apiUrl + 'pokemon/' + value.trim().toLowerCase();
        searchPokemonByName(url, value.trim().toLowerCase());
    }
    const dataSearch = listSearchedPokemon.dataSearchByName ? listSearchedPokemon.dataSearchByName : {};
    return (
        <div className={classes.root} id='header'>
            <AppBar className={classes.nav}>
                <Toolbar>
                    <Grid className={classes.nav} container justify="center" spacing={5} >
                        <Grid className={classes.itemMenu} item >
                            <Link to={{ pathname: '/pokemon' }}>
                                <img className={classes.logo} src={logoImg} alt="logo-header" />
                            </Link>
                        </Grid>
                        <Grid className={classes.itemMenu} item >
                            <HeaderItem name={"Color"} />
                        </Grid>
                        <Grid className={classes.itemMenu} item >
                            <HeaderItem name={"Egg Group"} />
                        </Grid>
                        <Grid className={classes.itemMenu} item >
                            <HeaderItem name={"Habitat"} />
                        </Grid>
                        <Grid className={classes.itemMenu} item >
                            <SearchBar handleChange={handleChange} dataSearch={dataSearch} />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div >
    );
}
const mapStateToProps = state => {
    return { listSearchedPokemon: state.listSearchedPokemon };
};
export default connect(mapStateToProps, { searchPokemonByName })(Header);