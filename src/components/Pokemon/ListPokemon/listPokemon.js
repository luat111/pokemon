import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Paper, Button } from '@material-ui/core';
import { apiUrl } from '../../../constraints/index';
import { fetchApiListPokemon } from '../../../redux/actions/pokemonAction';
import { connect } from 'react-redux';
import PokemonItem from '../PokemonItem/pokemonItem';
import { useStyles } from './listPokemonStyle';

function ListPokemon({ listPokemon, fetchApiListPokemon }) {
    const classes = useStyles();
    const [loadMore, setLoadMore] = useState(false);
    useEffect(() => {
        let url = apiUrl + 'pokemon?limit=24&offset=0';
        fetchApiListPokemon(url);
    }, [fetchApiListPokemon]);
    useEffect(() => {
        if (loadMore && listPokemon.data) {
            let offset = listPokemon.data.length;
            let url = apiUrl + 'pokemon?limit=24&offset=' + offset;
            setLoadMore(false);
            fetchApiListPokemon(url);
        }
    }, [loadMore, listPokemon, fetchApiListPokemon])
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
                    <br />
                    <Button onClick={() => { setLoadMore(loadMore => !loadMore) }} className={classes.button} variant="outlined" color="primary" >
                        Load more ...
                    </Button>
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