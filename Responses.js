import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Response from './Response';
import { Container, Header, Content, Accordion, Text } from "native-base";
import SearchBar from './SearchBar';

const generateResponse = () => {
  return {
    "mood": 10,
    "battery": 1,
    "muscles": 1,
    "mind": 1,
    "composure": 1,
    "confidence": 1,
    "arousal": 1,
    "readiness": 1,
    "chat": 1,
    "chatWith": 1,
    "additionalThoughts": 1,
  }
  
}
const dataArray = [
  { title: "Player A", response: generateResponse(), content: <Response response={generateResponse()} /> },
  { title: "Player B", response: generateResponse(), content: <Response response={generateResponse()} /> },
  { title: "Player C", response: generateResponse(), content: <Response response={generateResponse()} /> }
];

export default function Responses(responses = []) {
  const [ data, setData ] = useState(dataArray);

  const handleSearch = (query) => {
    const splits = query.split(/(==)|(<)|(>)/, 5)

    if (splits.length != 5 ){
      return
    }

    const key = splits[0]
    const value = splits[4]

    console.log(splits)
    // setData(dataArray)
    // return

    if (splits[1] != null ){ // equals
      setData(dataArray.filter(({response}) => {
        return response[key] && value.localeCompare(response[key]) == 0
      }))
    } else if(splits[2] != null) { // less than
      setData(dataArray.filter(({response}) => {
        return response[key] && value.localeCompare(response[key]) > 0
      }))
    } else if(splits[3] != null) { // greater than
      setData(dataArray.filter(({response}) => {
        return response[key] && value.localeCompare(response[key]) < 0
      }))
    }

  }

  console.log(data.length)

  return (
    <View>
      <SearchBar handleSearch={handleSearch} />
        <Header style={styles.header}>
          <Text>Players' Responses</Text>
        </Header>
        <Accordion dataArray={data} headerStyle={styles.accordian_header} expanded={0} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: "0 106px",
  },
  accordian_header: {
    fontWeight: "800",
  }
});
