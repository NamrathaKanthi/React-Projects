import React, { Component } from 'react';
import './buttonsSample.scss';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';


export const AvatarExampleSimple = () => (
    <List>
        <ListItem disabled={true} leftAvatar={<Avatar>F</Avatar>}> Form </ListItem>
    </List>
);