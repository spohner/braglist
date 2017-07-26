import React, { Component } from 'react';
import { View, Image, Text, Button } from 'react-native';
import {db, auth, isAuthenticated, storageKey} from '../config/firebase';

export default class AppLoading extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={{backgroundColor: '#ffd200', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>AppLoading</Text>
            </View>
        );
    }
}