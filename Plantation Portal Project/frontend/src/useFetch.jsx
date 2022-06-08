//custom hook to fetch any data 
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {   
    const [data, setData] = useState([])    //for any data
    const [isPending, setIsPending] = useState(true); //to show loading message
    const [error, setError] = useState(null); //to show error on screen
    
    //blogs is the dependency, when the blogs change, it triggers useEffect to run 
    useEffect(() => { 
      axios.get(url)
        .then((response) => {
          if (response.status!==200) { // if response failed to fetch data from server
              throw Error('could not fetch the data for that resource');  //this error is catched by catch block
          } 
          setIsPending(false);
          setData(response.data)
          setError(null);
        })
        .catch((error) => {
          console.log(error)
          setIsPending(false);
          setError(error.message);          
        })

    }, [url])

  return { data, isPending, error };    //returning the states to parent
}
 
export default useFetch;