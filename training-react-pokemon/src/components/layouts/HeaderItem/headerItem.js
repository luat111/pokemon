import React, { useState, useEffect } from 'react';
import { Paper, MenuList, MenuItem, Typography, Popper } from '@material-ui/core';
import { apiColorUrl, apiEggUrl, apiHabitatUrl, apiUrl } from '../../../constraints/index';
import { connect } from 'react-redux';
import { fetchApiMenu } from '../../../redux/actions/menuAction';

import { useStyles } from './headerItemStyle';

const HeaderItem = ({ name, listMenu, fetchApiMenu }) => {
    const classes = useStyles();
    const [menuSpan, setMenuSpan] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const id = menuSpan ? "simple-popover" : undefined;

    useEffect(() => {
        let url = '';
        switch (name) {
            case "Color":
                url = apiColorUrl;
                break;
            case "Egg Group":
                url = apiEggUrl;
                break;
            case "Habitat":
                url = apiHabitatUrl;
                break;
            default:
                url = apiUrl;
                break;
        }
        fetchApiMenu(url, name);
    }, [fetchApiMenu, name]);

    return (
        <>
            <span className={classes.span}
                onMouseOver={(e) => {
                    setMenuSpan(true);
                    setAnchorEl(e.currentTarget);
                }}
                onMouseLeave={(e) => {
                    setMenuSpan(false);
                    setAnchorEl(null);
                }}>
                <Typography variant="h6" className={classes.title}>
                    {name}
                </Typography>
                <Popper
                    id={id}
                    open={menuSpan}
                    anchorEl={anchorEl}
                    placement="bottom"
                    role={undefined}
                    transition
                    disablePortal>
                    <Paper>
                        {menuSpan ?
                            <MenuList id="menu-list-grow" >
                                {listMenu[name].listMenu.map((item, index) =>
                                    <div key={index}>
                                        <MenuItem >{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</MenuItem>
                                    </div>
                                )}
                            </MenuList>
                            : null
                        }
                    </Paper>
                </Popper>
            </span>
        </>
    )
}
const mapStateToProps = state => {
    return {
        listMenu: state.listMenu,
    }
}

export default connect(mapStateToProps, { fetchApiMenu })(HeaderItem);