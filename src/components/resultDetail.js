import React from 'react';
import { Text, Image, StyleSheet, View} from 'react-native';

const ResultDetail = ({result}) => {
    return(
        <View>
            <Image style={styles.image} source={{ uri: result.image_url }}/>
            <Text style={styles.text}>{result.name}</Text>
            <Text style={styles.textRate}>{result.rating} Stars,  {result.review_count} reviews</Text>
            <Text style={styles.textRate}>{result.location.address1}</Text>
            <Text></Text>
            <Text></Text>
        </View>
    );
};
    
const styles = StyleSheet.create({
    image:{
        width: 200,
        height: 150,
        margin: 15,
        borderRadius: 5,
    },
    text:{
        left: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
    textRate:{
        left: 20,
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default ResultDetail;
