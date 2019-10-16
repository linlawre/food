import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {

  return (
    <View style={styles.background}>
        <Feather name="search" style={styles.iconStyle}/>
     <TextInput 
        placeholder='search' 
        style={styles.inputStyle}
        autoCorrect={false}
        value = {term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
     />
    </View>
  );
};

const styles = StyleSheet.create({
    background:{
        marginTop:15,
        backgroundColor:'#F0F0F0',
        height: 50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection: 'row',
    },
    inputStyle:{
        flex : 1,
        fontSize: 20,
        marginLeft:5, 
    },
    iconStyle:{
        fontSize:35,
        alignSelf: 'center',
    },
});

export default SearchBar;
