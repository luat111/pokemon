import React, { useEffect } from 'react';
import { Container, Typography, Grid, Paper } from '@material-ui/core';
import { apiUrl } from '../../../constraints/index';
import { fetchApiListPokemon } from '../../../redux/actions/pokemonAction';
import { connect } from 'react-redux';
import PokemonItem from '../PokemonItem/pokemonItem';
import { useStyles } from './listPokemonStyle';

function ListPokemon({ listPokemon, fetchApiListPokemon }) {
    const classes = useStyles();

    useEffect(() => {
        let url = apiUrl + 'pokemon?limit=25&offset=0';
        fetchApiListPokemon(url);
    }, [fetchApiListPokemon]);

    return (
        <React.Fragment>
            <Container >
                <Typography component="div" className={classes.containerBackGround}>
                    <Grid container justify="center" spacing={5} >
                        {listPokemon.data && !listPokemon.isLoading &&
                            listPokemon.data.map((pokemonItem, index) => (
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
        listPokemon: state.listPokemon,
    }
}

export default connect(mapStateToProps, { fetchApiListPokemon })(ListPokemon);