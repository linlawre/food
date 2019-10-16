import React, {useState} from 'react';
import { Text, StyleSheet, View, ScrollView} from 'react-native';
import ResultsList from '../components/resultsList';
import SearchBar from '../components/searchBar';
import useResults from '../hooks/useResults';

//<Text style={styles.textRes}>We have found {res.length} results</Text>

const HomeScreen = () => {

  const [term, setTerm] = useState('');
  const [searchApi, res, errMsg] = useResults();


  const filterResultByPrice = (price) => {
    return res.filter(ress => {
      return ress.price === price;
    });
  };

  return (
    <ScrollView>
      <SearchBar 
        term={term} 
        onTermChange={(newItem) => setTerm(newItem)}
        onTermSubmit={()=>searchApi(term)}
      />
      
      {errMsg ? <Text style={styles.textRes}>{errMsg}</Text> : null}
      
      <ResultsList 
        res={filterResultByPrice('$')} 
        title="Cheap Food!!!"
      />
      <ResultsList 
        res={filterResultByPrice('$$')} 
        title="Acceptable (Maybe)"
      />
      <ResultsList 
        res={filterResultByPrice('$$$')} 
        title="Money Stealer"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background:{
    backgroundColor: 'grey',
  },
  textRes:{
    marginLeft : 20,
    marginTop: 10,
  },
  topBack:{
    backgroundColor:'red',
  },
});

export default HomeScreen;
