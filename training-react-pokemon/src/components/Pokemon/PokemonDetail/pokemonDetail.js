import React from 'react';
import { Paper, Chip, Typography, Avatar, Grid } from '@material-ui/core';
import { useParams } from "react-router-dom";
import { useStyles } from './pokemonDetailStyle';
import { apiImgBackGround, apiGif } from '../../../constraints/index';
function PokemonDetail() {
    const classes = useStyles();
    const { id } = useParams();
    const { name } = useParams();
    return (
        <>
            <Typography className={classes.container}>
                <Paper elevation={0} className={classes.statContainer}>
                    <img className={classes.imgPokemon} alt="img-pokemon" src={`${apiImgBackGround}` + id + ".svg"} />
                    <Paper elevation={0} className={classes.stats} >
                        <Paper elevation={0} className={classes.nameContainer}>
                            <p className={classes.titlePokemon} >
                                &nbsp;&nbsp;STATS:
                            </p>
                        </Paper>
                        <Grid container justify="center" spacing={8} >
                            <Grid item>
                                <Paper elevation={0} className={classes.statItemWrap}>
                                    <Typography className={classes.statItem} >
                                        Hp:
                                    </Typography>
                                    <Typography className={classes.statItem} >
                                        Speed:
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper elevation={0} className={classes.statItemWrap}>
                                    <Typography className={classes.statItem} >
                                        Attack:
                                </Typography>
                                    <Typography className={classes.statItem} >
                                        Special-Attack:
                                </Typography>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper elevation={0} className={classes.statItemWrap}>
                                    <Typography className={classes.statItem} >
                                        Denfense:
                                </Typography>
                                    <Typography className={classes.statItem} >
                                        Special-Denfense:
                                </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid className={classes.chipContainer} container justify="center" spacing={8}>
                            <Grid item>
                                <Chip
                                    className={classes.chip}
                                    label={'Type'}
                                    color="primary"
                                />
                            </Grid>
                            <Grid item>
                                <Chip
                                    className={classes.chip}
                                    label={'Weight'}
                                    color="primary"
                                />
                            </Grid>
                            <Grid item>
                                <Chip
                                    className={classes.chip}
                                    label={'Height'}
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
                        <Avatar sizes='50px' variant="square" alt="gif-info-pokemon" src={`${apiGif}` + id + ".gif"} />
                    </Paper>
                    <Paper elevation={0} className={classes.info}>
                        <Typography className={classes.infoPokemon} >
                            Color:
                        </Typography>
                        <Typography className={classes.infoPokemon} >
                            Egg Group:
                        </Typography>
                        <Typography className={classes.infoPokemon} >
                            Habitat:
                        </Typography>
                        <Typography className={classes.infoPokemon} >
                            Hatching Egg Time:
                        </Typography>
                        <Typography className={classes.infoPokemon} >
                            Evolution:
                        </Typography>
                    </Paper>
                </Paper>
            </Typography>
        </>
    )
}

export default (PokemonDetail);