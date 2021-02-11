import { InputBase, Popper, Paper, MenuList, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { useStyles } from './searchLayoutStyle';


const SearchLayout = ({ handleChange, dataSearch }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const id = dataSearch.id ? "simple-popover" : undefined;
    return (
        <div>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <span
                    onMouseOver={(e) => {
                        setOpen(true);
                        setAnchorEl(e.currentTarget);
                    }}
                    onMouseLeave={(e) => {
                        setOpen(false);
                        setAnchorEl(null);
                    }}>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        onChange={(e) => { handleChange(e) }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    <Popper
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        placement="bottom"
                        role={undefined}
                        transition
                        disablePortal>
                        <Paper component="div">
                            <MenuList id="menu-list-grow" >
                                {id ? <Link
                                    to={{ pathname: '/pokemon/' + dataSearch.id + '/' + dataSearch.name }}
                                    style={{ textDecoration: 'none' }}>
                                    <MenuItem >
                                        <img sizes='50px' variant="square" alt="gif-info-pokemon" src={
                                            dataSearch.sprites.versions['generation-v']['black-white'].animated.front_default ||
                                            dataSearch.sprites.front_default
                                        } />
                                    &nbsp;
                                    #{dataSearch.id}-
                                    {dataSearch.name.charAt(0).toUpperCase() + dataSearch.name.slice(1)}
                                    </MenuItem>
                                </Link>
                                    : null}
                            </MenuList>
                        </Paper>
                    </Popper>
                </span>
            </div>
        </div>
    )
}
export default (SearchLayout);