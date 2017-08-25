import React, { Component } from 'react';
import { View, Image, TextInput, Button, AsyncStorage, Text} from 'react-native';
import {db, auth, storageKey} from '../config/firebase';

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = { username: 'email', password: 'password', newuser: false };
    }

    handleSignIn(){
        auth.signInWithEmailAndPassword(this.state.username, this.state.password).then((userData)=>{
            AsyncStorage.setItem(storageKey, JSON.stringify(userData));
            this.props.loggedIn();
        });
    }

    handleRegister(){
        auth.createUserWithEmailAndPassword(this.state.username, this.state.password).then((userData) =>{
            AsyncStorage.setItem(storageKey, JSON.stringify(userData));
            this.props.loggedIn();
        });
    }

    render(){
        if(!this.state.newuser){
            return (
                <View style={{backgroundColor: '#ffd200', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontFamily: 'josefin-sans', fontSize: 28}}>braglist</Text>
                    <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChangeText={(text) => this.setState({username: text})} value={this.state.username} />
                    <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChangeText={(text) => this.setState({password: text})} value={this.state.password} />
                    <Button title="Register new user?" onPress={() => this.setState({newuser: true})} />
                    <Button onPress={() => this.handleSignIn()} title="Log in" />
                </View>
            );
        }
        else{
            return(
            <View style={{backgroundColor: '#ffd200', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChangeText={(text) => this.setState({username: text})} value={this.state.username} />
                <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChangeText={(text) => this.setState({password: text})} value={this.state.password} />
                <Button onPress={() => this.handleRegister()} title="Register"/>
            </View>)
        }
    }
}