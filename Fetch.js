import React from 'react';
import { Text, FlatList, View, Alert } from 'react-native';

const URL = "https://www.madsjustesen.dk/jwtbackend/api/info/apis"

export default class Fetch extends React.Component {
    state = { data: []};

    async componentDidMount() {
        try {
            const d = await fetch(URL).then(res => res.json())
            const data = d.persons.map(person => {
                person.key = person.name;
                return person
            })
            
            this.setState({ data: data});
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <View>
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => <Text>{item.name}</Text>}
            />
            </View>
        )
    }
}