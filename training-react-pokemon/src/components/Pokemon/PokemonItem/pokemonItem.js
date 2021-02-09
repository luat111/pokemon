import React, { useState } from 'react';
import { Avatar, Badge, Chip, Typography } from '@material-ui/core';
import { apiImg, apiGif, apiImgBackGround } from '../../../constraints/index';

import { useStyles } from './pokemonItemsStyle';

function PokemonItem({ id, name }) {
    const classes = useStyles();
    const [bgImg, setBgImg] = useState(false);
    const [chip, setChip] = useState(false);
    return (
        <>
            <div className={classes.containerPokemon}>
                <Badge
                    className={classes.avatar}
                    overlap="circle"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    badgeContent={<Avatar alt="gif-pokemon" src={`${apiGif}` + id + ".gif"} />}
                >
                    <div onMouseOver={() => { setBgImg(true) }} onMouseLeave={() => { setBgImg(false) }}>
                        {!bgImg ?
                            <Avatar className={classes.imgPokemon} alt="img-pokemon" src={`${apiImg}` + id + ".png"} /> :
                            <Avatar className={classes.imgBgPokemon} alt="img-pokemon" src={`${apiImgBackGround}` + id + ".svg"} />
                        }
                    </div>
                </Badge>
                <div onMouseOver={() => { setChip(true) }} onMouseLeave={() => { setChip(false) }}>
                    <Chip
                        className={classes.chip}
                        label={<Typography className={classes.label}>#{id}-{name.charAt(0).toUpperCase() + name.slice(1)}</Typography>}
                        clickable={true}
                        variant={chip ? "default" : "outlined"}
                        color="primary"
                        component="a"
                        href={`/pokemon/${id}/${name}`}
                    />
                </div>
            </div>
        </>
    )
}

export default (PokemonItem);