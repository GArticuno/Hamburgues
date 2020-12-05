import React from 'react';
import { MaterialCommunityIcons, MaterialIcons, AntDesign} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import Perfilscreen from '../screens/Perfilscreen';
import Cardapioscreen from '../screens/Cardapioscreen';
import Carrinhoscreen from '../screens/Carrinhoscreen';

const Tab = createBottomTabNavigator();
const PerfilStack = createStackNavigator();
const CardapioStack = createStackNavigator();
const CarrinhoStack = createStackNavigator();

const theme={
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      primary:'#000000',
      accent:'#ce93d8',
      background:'#f3e5f5',
      text:'#4a148c',
      disable:'#eeeeee',
    },
  };

export default function MainTab(){
    return(
        <PaperProvider theme={theme}>
        <Tab.Navigator
          initialRouteName="Cardapio"
          tabBarOptions={{
            activeTintColor: '#242424',
            inactiveTintColor: '#fff',
            inactiveBackgroundColor:'#242424',
            activeBackgroundColor:'#fff',
            
          }}
        >
        

        <Tab.Screen 
          name="Carrinho" 
          component={CarrinhoStackScreen} 
          options={{
            tabBarLabel:'Carrinho',
            tabBarIcon:({color}) =>(
              <AntDesign name={'shoppingcart'} size={25} color={color} />
            ),
          }}/>
        <Tab.Screen 
          name="Cardapio" 
          component={CardapioStackScreen} 
          options={{
            tabBarLabel:'Cardápio',
            tabBarIcon:({color}) =>(
              <MaterialIcons name={'restaurant-menu'} size={25} color={color} />
            ),
          }}/>
        <Tab.Screen 
          name="Perfil" 
          component={PerfilStackScreen}
          options={{
            tabBarLabel:'Perfil',
            tabBarIcon:({color}) =>(
              <MaterialCommunityIcons name={'account'} size={25} color={color} />
            ),
          }}/>
        </Tab.Navigator>
        </PaperProvider>
    );
}
const PerfilStackScreen = ({navigation}) => (
    <PerfilStack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor:'#242424',
          shadowColor:'#242424',
          elevation:0,
        },
        headerTintColor:'#fff',
      }}
    >
      <PerfilStack.Screen 
      name='Perfil' 
      component={Perfilscreen}
      options={{
        title:'',
        backgroundColor:'#242424',
          headerLeft: () =>(
            <MaterialCommunityIcons
            style={{paddingLeft:10}}
            name='menu'
            size={25}
            backgroundColor='#673ab7'
            color='#fff'
            onPress={()=>{navigation.openDrawer()}}
            />)
      }}/>
    </PerfilStack.Navigator>
  );
  
  const CardapioStackScreen = ({navigation}) => (
    <CardapioStack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor:'#242424',
          shadowColor:'#242424',
          elevation:0,
        },
        headerTintColor:'#fff',
      }}
    >
      <CardapioStack.Screen 
      name='Cardapio' 
      component={Cardapioscreen}
      options={{
        title:'',
        backgroundColor:'#673ab7',
        headerLeft: () =>(
            <MaterialCommunityIcons
            style={{paddingLeft:10}}
            name='menu'
            size={25}
            backgroundColor='#673ab7'
            color='#fff'
            onPress={()=>{navigation.openDrawer()}}
            />)
      }}/>
    </CardapioStack.Navigator>
  );
  
  const CarrinhoStackScreen = ({navigation}) => (
    <CarrinhoStack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor:'#242424',
          shadowColor:'#242424',
          elevation:0,
        },
        headerTintColor:'#242424',
      }}
    >
      <CarrinhoStack.Screen 
      name='Carrinho' 
      component={Carrinhoscreen}
      options={{
        title:'',
        backgroundColor:'#673ab7',
        headerLeft: () =>(
            <MaterialCommunityIcons
            style={{paddingLeft:10}}
            name='menu'
            size={25}
            backgroundColor='#673ab7'
            color='#fff'
            onPress={()=>{navigation.openDrawer()}}
            />)
      }}/>
    </CarrinhoStack.Navigator>
  );