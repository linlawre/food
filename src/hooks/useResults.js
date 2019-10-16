import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {

    const [res, setRes] = useState([]);
    const [errMsg, setErrMsg] = useState([]);

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', { //?limit=50
            params:{
                limit:50,
                term : searchTerm,
                location: 'los angeles',
            }
            });

            setRes(response.data.businesses);
        }
        catch(err){
            setErrMsg('Something went wrong!!!');
        }
    };

    useEffect(()=>{
        searchApi('pasta');
    }, []); // only run one time

    //searchApi('pasta'); // it will keep running which we dont want
    return [searchApi, res, errMsg];
};