import React,{Component, useState} from 'react';
import {StyleSheet, ActivityIndicator,Modal,View} from 'react-native';
import { Container,Content, Card, CardItem, Text, Body,Button,Item,Input,Icon } from 'native-base';
import * as Font from 'expo-font';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      nomusu:'',
      pass:'',
      isloading: true,
    }
  }

  ShowHideActivityIndicator = () =>{
    const navegar=this.props.navigation;
    if(this.state.isLoading == true)
    {
      this.setState({isLoading: false})
    }
    else
    {
      this.setState({isLoading: true})
      setTimeout(() => {
        navegar.navigate('Productos');
        this.setState({isLoading: false})
      },2000);
    }
  }

render(){
  return (
    <Container>
        <View style={misEstilos.MainContainer}>
        {
        this.state.isLoading ?  
        <Modal
        transparent = {true} 
        animationType = {'none'} 
        visible = {this.state.isloading}> 
          <View style = {misEstilos.modalBackground}> 
            <View style = {misEstilos.activityIndicatorWrapper}> 
              <ActivityIndicator style={{padding: 70}} /> 
            </View> 
          </View> 
        </Modal> : null
        }
        </View>
        <Content padder contentContainerStyle ={misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style={misEstilos.textCenter}>Inicio de sesión</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Item inlineLabel>
                  <Icon type = 'FontAwesome' name='user'></Icon>
                  <Input placeholder='Nombre de usuario' 
                  onChangeText={(nomusu) => this.setState({nomusu})} />
                </Item>
                <Item inlineLabel last>
                  <Icon type = 'FontAwesome' name = 'lock'></Icon>
                  <Input placeholder='Contraseña' 
                  onChangeText={(pass) => this.setState({pass})} secureTextEntry={true} />
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
            <Button primary style={misEstilos.boton} onPress={this.ShowHideActivityIndicator}><Text> Entrar </Text></Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
  );
}
};

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  boton:{
    marginLeft: '70%',
  },
  MainContainer :{
    justifyContent: 'center',
  },
  modalBackground : {
    flex : 1 ,
    alignItems : 'center' ,
    flexDirection : 'column' ,
    justifyContent : 'space-around' ,
    backgroundColor : '#00000040'
  } ,
  activityIndicatorWrapper : {
    backgroundColor : '#FFFFFF' ,
    height : 100 ,
    width : 100 ,
    borderRadius : 10 ,
    display : 'flex' ,
    alignItems : 'center' ,
    justifyContent : 'space-around'
  }
});

export default Login;
