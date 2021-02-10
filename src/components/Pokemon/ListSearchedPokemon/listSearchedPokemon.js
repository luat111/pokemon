import React, { useEffect } from 'react';
import { Container, Typography, Grid, Paper } from '@material-ui/core';
import { apiUrl } from '../../../constraints/index';
import { fetchApiSearchPokemon } from '../../../redux/actions/searchPokemonAction';
import { connect } from 'react-redux';
import PokemonItem from '../PokemonItem/pokemonItem';
import { useStyles } from './listSearchedPokemonStyle';
import { useParams } from 'react-router';

function ListSearchedPokemon({ listSearchedPokemon, fetchApiSearchPokemon }) {
    const classes = useStyles();
    const params = useParams();
    const searchBy = params.type + '_' + params.idType
    useEffect(() => {
        let url = apiUrl + `${params.type}/${params.idType}`;
        fetchApiSearchPokemon(url, searchBy);
    }, [fetchApiSearchPokemon, params, searchBy]);
    return (
        <React.Fragment>
            <Container >
                <Typography component="div" className={classes.containerBackGround}>
                    <Grid container justify="center" spacing={5} >
                        {listSearchedPokemon[searchBy] && !listSearchedPokemon[searchBy].isLoading &&
                            listSearchedPokemon[searchBy].dataPokemon.pokemon_species.map((pokemonItem, index) => (
                                <Grid key={index} item >
                                    <Paper className={classes.paper}>
                                        <PokemonItem id={pokemonItem.url.split('/')[6]} name={pokemonItem.name} />
                                    </Paper>
                                </Grid>
                            ))}
                    </Grid>
                </Typography>
            </Container>
        </React.Fragment>
    );
}
const mapStateToProps = state => {
    return {
        listSearchedPokemon: state.listSearchedPokemon,
    }
}

export default connect(mapStateToProps, { fetchApiSearchPokemon })(ListSearchedPokemon);