import React from 'react';
import { View, ActivityIndicator, Pressable, Text, StyleSheet, FlatList } from 'react-native';
import Http from '../libs/http';
import CharacterItem from './CharacterItem';

interface CharacterState {
    characters: Character[];
    loading: boolean;
    next: string | null;
    prev: string | null;
}

interface Character {
    id: number;
    name: string;
    species: string;
    image: string;
}

interface CharacterResponse {
    info: {
        next: string | null;
        prev: string | null;
    };
    results: Character[];
}

class Character extends React.Component<any, CharacterState> {
    state: CharacterState = {
        characters: [],
        loading: false,
        next: null,
        prev: null,
    };

    componentDidMount = async () => {
        this.setState({ loading: true });
        const res: CharacterResponse = await Http.instance.get('https://rickandmortyapi.com/api/character/');
        this.setState({ characters: res.results, loading: false });
        if (res.info.next) {
            this.setState({ next: res.info.next });
        }
        if (res.info.prev) {
            this.setState({ prev: res.info.prev });
        }
    };

    handleNextPress = async () => {
        const { next } = this.state;
        if (!next) return;
        this.setState({ loading: true });
        const res: CharacterResponse = await Http.instance.get(next);
        console.log('Go to Next Page ');
        this.setState({ characters: res.results, loading: false, next: res.info.next, prev: res.info.prev });
    };

    handlePrevPress = async () => {
        const { prev } = this.state;
        if (!prev) return;
        this.setState({ loading: true });
        const res: CharacterResponse = await Http.instance.get(prev);
        console.log('Go to Previous Page ');
        this.setState({ characters: res.results, loading: false, next: res.info.next, prev: res.info.prev });
    };

    handleCharacterPress = (character_url: string) => {
        console.log(character_url);
        this.props.navigation.navigate('CharacterDetail', { character_url });
    };

    render() {
        const { characters, loading, next, prev } = this.state;
        return (
            <View style={styles.container}>
                {loading ?
                    <ActivityIndicator
                        color='#000'
                        size='large'
                        style={styles.loader}
                    />
                    : null
                }
                <FlatList
                    data={characters}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={
                        ({ item }) => (
                            <View>
                                <Pressable onPress={() => this.handleCharacterPress('https://rickandmortyapi.com/api/character/' + item.id)}>
                                    <CharacterItem item={item} />
                                </Pressable>
                            </View>
                        )
                    }
                />
                {prev ?
                    <Pressable style={styles.btn} onPress={this.handlePrevPress}>
                        <Text style={styles.btnText}>Previous</Text>
                    </Pressable>
                    : null
                }
                {next ?
                    <Pressable style={styles.btn} onPress={this.handleNextPress}>
                        <Text style={styles.btnText}>Next</Text>
                    </Pressable>
                    : null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#67dd23',
    },
    btn: {
        padding: 0,
        backgroundColor: '#034246',
        height: 30,
        margin: 1,
    },
    btnText: {
        color: '#53eae3',
        textAlign: 'center',
        fontSize: 22,
    },
    loader: {
        marginTop: 10,
    },
});

export default Character;
