import React from 'react';
import { Text, FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';

const URL = "https://www.madsjustesen.dk/jwtbackend/api/info/apis"

export default class Fetch extends React.Component {
    state = { data: [], spinner: true };

    async componentDidMount() {
        try {
            const d = await fetch(URL).then(res => res.json())
            const data = d.persons.map(person => {
                person.key = person.name;
                return person
            })

            this.setState({ data: data, spinner: false });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <View>
                {this.state.spinner ?
                    <View style={styles.spinner}>
                    <ActivityIndicator size="large" color="grey"/>
                    </View>
                    :
                    <View>
                        <FlatList
                            data={this.state.data}
                            renderItem={({ item }) => <Text>{item.name}</Text>}
                        />
                    </View>
                }
            </View>

        )
    }
}

// Spinner = (props) => {
//     return (
//         <View style={[styles.container, styles.horizontal]}>
//             <
//         </View>
//     )
// }

const styles = StyleSheet.create({
    spinner: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 250,
        padding: 8,
    }
})