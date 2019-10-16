import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import ResultDetail from './resultDetail';
import { withNavigation } from 'react-navigation';

const ResultsList = ({title, res, navigation}) => {

    return (
        <View>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.textResults}>{res.length} Results</Text>
            <FlatList
                horizontal
                data={res}
                keyExtractor={(res) => res.id}
                renderItem={({ item })=> {
                    return (
                        <TouchableOpacity onPress={()=> navigation.navigate('Search', {id: item.id })}>
                            <ResultDetail result={item}/>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};
    
const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        left: 20,
    },
    textResults:{
        fontSize: 15,
        fontWeight: 'bold',
        left: 20,
    }
});

export default withNavigation(ResultsList);
