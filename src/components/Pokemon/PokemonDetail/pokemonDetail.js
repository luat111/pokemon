import React, { useEffect } from 'react';
import { Paper, Chip, Typography, Avatar, Grid } from '@material-ui/core';
import { useParams } from "react-router-dom";
import { useStyles } from './pokemonDetailStyle';
import { connect } from 'react-redux';
import { fetchApiDetailPokemon } from '../../../redux/actions/pokemonDetailAction'
import { apiGif, apiUrl } from '../../../constraints/index';
import Loading from '../../Loading/loading';
import Stat from './StatPokemon/statPokemon';
import { renderSymbol } from '../../Symbol/Symbol';
function PokemonDetail({ detailPokemon, fetchApiDetailPokemon }) {
    const classes = useStyles();
    const { id } = useParams();
    const { name } = useParams();
    useEffect(() => {
        let url = apiUrl + 'pokemon/' + id;
        fetchApiDetailPokemon(url, id);
    }, [id, fetchApiDetailPokemon])

    var detailData = {};
    var infoData = {};
    var type = '';
    var eggGroup = '';
    var evlFrom = null;
    if (detailPokemon[id] && !detailPokemon[id].isLoading) {
        detailData = detailPokemon[id].dataPokemon.detail;
        infoData = detailPokemon[id].dataPokemon.info;
        detailData.types.map((e) => type += renderSymbol(e.type.name, "Type"));
        infoData.egg_groups.map((e) => eggGroup += e.name.charAt(0).toUpperCase() + e.name.slice(1) + ", ");
        evlFrom = infoData.evolves_from_species ? infoData.evolves_from_species.url.split('/')[6] : null;
    };

    return (
        <>
            {detailPokemon[id] && !detailPokemon[id].isLoading ?
                <Typography component='div' className={classes.container}>
                    <Paper elevation={0} className={classes.statContainer}>
                        <img className={classes.imgPokemon} alt="img-pokemon" src={
                            detailData.sprites.other.dream_world.front_default ||
                            detailData.sprites.other['official-artwork'].front_default
                        } />
                        <Paper elevation={0} className={classes.stats} >
                            <Paper elevation={0} className={classes.nameContainer}>
                                <Typography variant='h6' className={classes.titlePokemon} >
                                    &nbsp;&nbsp;STATS:
                                </Typography>
                            </Paper>
                            <Grid container justify="center" spacing={8} >
                                <Grid item>
                                    <Paper elevation={0} className={classes.statItemWrap}>
                                        <Stat nameStat={"Hp"} value={detailData.stats[0].base_stat} />
                                        <Stat nameStat={"Speed"} value={detailData.stats[5].base_stat} />
                                    </Paper>
                                </Grid>
                                <Grid item>
                                    <Paper elevation={0} className={classes.statItemWrap}>
                                        <Stat nameStat={"Attack"} value={detailData.stats[1].base_stat} />
                                        <Stat nameStat={"Sp-Attack"} value={detailData.stats[3].base_stat} />
                                    </Paper>
                                </Grid>
                                <Grid item>
                                    <Paper elevation={0} className={classes.statItemWrap}>
                                        <Stat nameStat={"Denfense"} value={detailData.stats[2].base_stat} />
                                        <Stat nameStat={"Sp-Denfense"} value={detailData.stats[4].base_stat} />
                                    </Paper>
                                </Grid>
                            </Grid>
                            <Grid className={classes.chipContainer} container justify="center" spacing={8}>
                                <Grid item>
                                    <Chip
                                        className={classes.chip}
                                        label={'Type: ' + type}
                                        color="primary"
                                    />
                                </Grid>
                                <Grid item>
                                    <Chip
                                        className={classes.chip}
                                        label={'Weight: ' + detailData.weight}
                                        color="primary"
                                    />
                                </Grid>
                                <Grid item>
                                    <Chip
                                        className={classes.chip}
                                        label={'Height: ' + detailData.height}
                                        color="primary"
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Paper>
                    <Paper elevation={0} className={classes.infoContainer}>
                        <Paper elevation={0} className={classes.nameContainer}>
                            <p className={classes.titlePokemon} >
                                INFO - {name.toUpperCase()}&nbsp;&nbsp;
                            </p>
                            <Avatar sizes='50px' variant="square" alt="gif-info-pokemon" src={
                                detailData.sprites.versions['generation-v']['black-white'].animated.front_default ||
                                detailData.sprites.front_default
                            } />
                        </Paper>
                        <Paper elevation={0} className={classes.info}>
                            <Typography className={classes.infoPokemon} >
                                Color -  {infoData.color.name.charAt(0).toUpperCase() +
                                    infoData.color.name.slice(1)} {renderSymbol(infoData.color.name, "Color")}
                            </Typography>
                            <Typography className={classes.infoPokemon} >
                                Base Exp - {detailData.base_experience}xp
                            </Typography>
                            <Typography className={classes.infoPokemon} >
                                Egg Group -  {eggGroup.slice(0, -2)}
                            </Typography>
                            <Typography className={classes.infoPokemon} >
                                Habitat -  {infoData.habitat ? infoData.habitat.name.charAt(0).toUpperCase() +
                                    infoData.habitat.name.slice(1) + ' ' +
                                    renderSymbol(infoData.habitat.name, "Habitat") : '❓'}
                            </Typography>
                            <Typography className={classes.infoPokemon} >
                                Abilities -  {detailData.abilities[0].ability.name.charAt(0).toUpperCase() +
                                    detailData.abilities[0].ability.name.slice(1)}
                            </Typography>
                            <Typography className={classes.infoPokemon} >
                                Hatching Egg Time -  {infoData.hatch_counter}
                            </Typography>
                            <Typography className={classes.infoPokemon} >
                                Evolution From:
                                {evlFrom ?
                                    <img style={{ paddingLeft: 10, paddingTop: 5, width: 50, height: 50 }}
                                        alt="gif-info-pokemon" src={`${apiGif}` + evlFrom + ".gif"} /> :
                                    <>🥚</>
                                }
                            </Typography>
                        </Paper>
                    </Paper>
                </Typography> : <Loading isLoading={true} />
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        detailPokemon: state.detailPokemon,
    }
}

export default connect(mapStateToProps, { fetchApiDetailPokemon })(PokemonDetail);