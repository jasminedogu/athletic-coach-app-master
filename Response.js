import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

const titles = {
  "mood": "Mood",
  "battery": "Battery",
  "muscles": "Muscles",
  "mind": "Mind",
  "composure": "Composure",
  "confidence": "Confidence",
  "arousal": "Arousal",
  "readiness": "Readiness",
  "chat": "Chat",
  "chatWith": "Chat With",
  "additionalThoughts": "Additional Thoughts",
}


export default function Response({ response }) {

  return (
    <List>
        <Content padder>
        {
          Object.keys(response).map((field) => (
            <ListItem key={field}>
              <Text style={styles.field_name}>
                {titles[field]}:
              </Text>
              <Text style={styles.field_value}>
                {response[field]}
              </Text>
            </ListItem>
          ))
        }
      </Content>

    </List>

  );
}

const styles = StyleSheet.create({
  container: {
    // display: "inline"
  },
  field_name: {
    fontWeight: "600",
    marginRight: 4,
  },
  field_value: {
    // display: "inline"
  },
});
