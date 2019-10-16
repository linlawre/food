import React , {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Image, FlatList, ScrollView } from 'react-native';
import yelp from '../api/yelp';
import { AntDesign } from '@expo/vector-icons';
import Maps from '../components/Maps';

const ShowResult = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, []) ;

    if (!result){
        return null;
    }

    return (   
        <ScrollView >

            <View style={styles.contanier}>
                <Text style={styles.text}>{result.name}</Text>

                <FlatList
                        horizontal
                        data={result.photos}
                        keyExtractor={(photo) => photo }
                        renderItem={({ item })=> {
                            return (
                            <Image style={styles.image} source = {{uri:item}}/>
                            );
                        }}
                />

                <AntDesign name="infocirlceo" style={styles.iconStyle}/>
                <Text style={styles.textBelow}>Phone: {result.display_phone}</Text>
                
                <Text style={styles.textBelow}>Food Style: {result.categories.title}</Text>
                <Text style={styles.textBelow}>Rating: {result.rating}</Text>
                <Text style={styles.textBelow}>Location: {result.location.display_address}</Text>
            </View>
            <View style={styles.map}>
                <Maps result={result}/>
            </View>
        </ScrollView>
        
    );
};

//<View style={styles.map}>
  //              <Maps result={result}/>
    //        </View>

const styles = StyleSheet.create({
    contanier:{
        height:500,
        width:'100%',
    },
    image:{
        width: 200,
        height: '80%',
        margin: 5,
        borderRadius: 5,
    },  
    text:{
        left: 20,
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
    textBelow:{
        left: 20,
        fontSize: 15,
        fontWeight: 'bold',
    },
    iconStyle:{
        fontSize:25,
        margin:20,
    },
    map:{
        width:'100%',
        height: 400,
        marginTop:15,
        marginBottom:15,
    }
});

export default ShowResult;
