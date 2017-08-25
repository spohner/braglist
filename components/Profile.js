import React, { Component } from 'react';
import { View, ListView, Text, Button} from 'react-native';
import {db, auth, isAuthenticated, storageKey} from '../config/firebase';

export default class Profile extends React.Component {
    constructor(props){
        super(props);
    }

    logOut(){
        auth.signOut();
    }

    deleteAccount(){
        auth.currentUser.delete();
    }

    render(){
        return (
            <View style={{backgroundColor: '#ffd200', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{auth.currentUser.uid}</Text>
                <Button onPress={this.logOut} title="Log out" color="#841584" />
                <Button onPress={this.deleteAccount} title="Delete account" color="#841584" />
            </View>
        );
    }
}