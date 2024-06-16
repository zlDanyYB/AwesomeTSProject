import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

interface CharacterItemProps {
    item: {
        name: string;
        species: string;
        image: string;
    };
}

const CharacterItem: React.FC<CharacterItemProps> = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.text}>{item.species}</Text>
            </View>
            <View style={styles.row}>
                <Image source={{ uri: item.image }} style={styles.tinyLogo} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        margin: 1,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        backgroundColor: '#000',
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    row: {
        flexDirection: 'row',
    },
    nameText: {
        color: '#fff',
        fontSize: 14,
        marginRight: 8,
        fontWeight: 'bold',
    },
    text: {
        color: '#fff',
        fontSize: 12,
    },
    priceText: {
        fontSize: 14,
        color: '#035',
    },
});

export default CharacterItem;
