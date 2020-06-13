import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { Link } from "react-router-dom";

import './LNB.css';

function LNB(props) {
  return (
    <Drawer
      className="lnb-drawer"
      classes={{
        paper: "lnb-drawer-paper",
      }}
      open={true}
      variant="permanent"
    >
      <List>
        {
          props.menuList.map((menu) => (
            <ListItem button key={menu.path}>
              <Link to={menu.path}>
                <ListItemText primary={menu.text}></ListItemText>
              </Link>
            </ListItem>
          ))
        }
      </List>
    </Drawer>
  );
}

export default LNB;