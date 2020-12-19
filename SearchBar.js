import React, { useState } from 'react';
import { Header, Item, Input, Icon, Button, Text } from 'native-base';

export default function SearchBar({handleSearch}){ 
    const [ query, setQuery] = useState("")
    return (
        <Header searchBar rounded>
            <Item>
                <Icon name="ios-search" />
                <Input onChangeText={setQuery} placeholder="Search" />
                <Icon name="ios-people" />
            </Item>
            <Button onPress={() => handleSearch(query)} transparent>
                <Text>Search</Text>
            </Button>
        </Header>
 );
    }