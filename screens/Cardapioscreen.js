import React, {Component} from "react";
import {SafeAreaView, Text, FlatList, TouchableOpacity, StatusBar} from "react-native";
import {DefaultTheme,Card, Title, Paragraph, Button, Provider as PaperProvider, Searchbar} from 'react-native-paper';
import styles from '../assets/styles/Bioma';
import menu from '../assets/json/cardapio.json'

const DATA = menu;

const theme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'#4caf50',
    accent:'#66bb6a',
    background:'#e8f5e9',
    text:'#fff',
    disable:'#eeeeee',
  },
};

export default class App extends Component{

  constructor(props) {
    super(props);

    this.state = {
      data: DATA
    };
    this.arrayholder = DATA;
  }

  renderHeader = () => {
    return (
      <PaperProvider theme={theme}>
        <Searchbar
        placeholder="Pesquise aqui..."
        placeholderTextColor='#fff'
        onChangeText={text => this.searchFilterFunction(text)}
        style={styles.procura}
      />
      </PaperProvider>
    );
  };

  searchFilterFunction = text => {    
    const newData = this.arrayholder.filter(item => {      
      const itemData = `${item.nome.toUpperCase()}   
      ${item.subnome.toUpperCase()}`;
      
       const textData = text.toUpperCase();
        
       return itemData.indexOf(textData) > -1;    
    });
    
    this.setState({ data: newData });  
  };

  render(){

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
      backgroundColor='#242424' 
      barStyle='light'
      />
      <FlatList
        data={this.state.data}
        renderItem={({item}) => {
          return(
          <PaperProvider theme={theme}>
          <Card style={styles.card}>
            <Card.Title/>
            <Card.Content>
          <Title style={styles.title}>{item.nome}</Title>
              <Paragraph style={styles.paragrafo}></Paragraph>
            </Card.Content>
            <Card.Cover />
          </Card>
          </PaperProvider>);}}
        keyExtractor={(item) => item}
        ListHeaderComponent={this.renderHeader}
      />
    </SafeAreaView>
  );
}
};