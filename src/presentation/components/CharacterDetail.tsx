import React from 'react';
import { View, ActivityIndicator, Text, FlatList, StyleSheet, Image } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from './MainScreen'; // Asegúrate de que la ruta sea correcta
import Http from '../libs/http';

type CharacterDetailRouteProp = RouteProp<MainStackParamList, 'CharacterDetail'>;

type CharacterDetailProps = {
    route: CharacterDetailRouteProp;
    navigation: StackNavigationProp<MainStackParamList, 'CharacterDetail'>;
};

interface CharacterDetailState {
    loading: boolean;
    character: Character | null;
    episodes: Episode[];
}

interface Character {
    name: string;
    gender: string;
    species: string;
    origin: {
        name: string;
    };
    location: {
        name: string;
    };
    image: string;
    episode: string[];
}

interface Episode {
    name: string;
}

class CharacterDetail extends React.Component<CharacterDetailProps, CharacterDetailState> {
    state: CharacterDetailState = {
        loading: false,
        character: null,
        episodes: [],
    };

    componentDidMount = async () => {
        this.setState({ loading: true });
        const res = await Http.instance.get(this.props.route.params.character_url);
        this.setState({ character: res });
        const { character } = this.state;
        if (character) {
            let episodes_info: Episode[] = [];
            for (let i in character.episode) {
                episodes_info.push(await Http.instance.get(character.episode[i]));
            }

            this.setState({ episodes: episodes_info });
        }
        this.setState({ loading: false });
    }

    render() {
        const { character, loading, episodes } = this.state;
        return (
            <View>
                {character ?
                    <View style={styles.container}>
                        <Image source={{ uri: character.image }} style={styles.image} />
                        <View style={styles.description}>
                            <Text style={styles.text}>Name: {character.name}</Text>
                            <Text style={styles.text}>Gender: {character.gender}</Text>
                            <Text style={styles.text}>Specie: {character.species}</Text>
                            <Text style={styles.text}>Origin Location: {character.origin.name}</Text>
                            <Text style={styles.text}>Current location: {character.location.name}</Text>
                        </View>
                    </View>
                    : null
                }
                {loading ?
                    <ActivityIndicator
                        color='#005'
                        size='large'
                        style={styles.loader}
                    />
                    :
                    <FlatList
                        style={styles.episode_list}
                        data={episodes}
                        renderItem={
                            ({ item }) => <Text style={styles.text}>{item.name}</Text>
                        }
                    />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '50%',
        backgroundColor: '#67dd23',
        alignItems: 'center'
    },
    description: {
        padding: 20,
        marginTop: 20,
        backgroundColor: '#000',
        width: '100%'
    },
    episode_list: {
        padding: 20,
        backgroundColor: '#000',
        width: '100%'
    },
    loader: {
        marginTop: 10,
    },
    image: {
        marginTop: 20,
        width: '50%',
        height: '50%',
    },
    text: {
        fontSize: 17,
        color: '#53eae3'
    }
});

export default CharacterDetail;
