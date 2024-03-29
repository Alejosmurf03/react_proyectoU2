import React from 'react'
import { StyleSheet, FlatList, ActivityIndicator, Platform } from 'react-native'
import PokemonCard from './PokemonCard';

export default function PokemonList(props) {
    return (
        <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={<PokemonCard />}
            contentContainerStyle={styles.flatListContentContiner}
            onEndReached={isNext && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                isNext && (
                    <ActivityIndicator size="large" style={styles.spinner} color='#AEAEAE' />
                )
            }
        />
    )
}

const styles = StyleSheet.create({
    flatListContentContiner: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === "android" ? 30 : 0,
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === "android" ? 90 : 30,
    }
})