import React, { useState, useEffect, ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons';
import DraftsIcon from '@material-ui/icons/Drafts';
import HomeIcon from '@material-ui/icons/Home';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AppsIcon from '@material-ui/icons/Apps';

import styles from './SideBar.module.scss'

type Props = {
  children: ReactNode;
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props: any) {
  return <ListItem button component="a" {...props} />;
}

export default function SideBar(props: Props) {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={styles.container}>
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DateRangeIcon />
            </ListItemIcon>
            <ListItemText primary="Calendário" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AttachFileIcon />
            </ListItemIcon>
            <ListItemText primary="Atividaes" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LocalMallIcon />
            </ListItemIcon>
            <ListItemText primary="Arquivos" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ChatBubbleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AppsIcon />
            </ListItemIcon>
            <ListItemText primary="Outros" />
          </ListItem>
        </List>
    </div>
    {children}
  </div>
  );
}