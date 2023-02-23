import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import Navbar from './components/Navbar';

function App() {

  const [data, setData] = useState([]);

useEffect(() => {
 
const getData = () => {
  // fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-01-22&sortBy=publishedAt&apiKey=ed46475ea644475e82b103f9ba476cb8')
  // .then(response => response.json())
  // .then(data => setData(data.articles))
  // .catch(error => console.log(error))
  axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-01-22&sortBy=publishedAt&apiKey=ed46475ea644475e82b103f9ba476cb8')
  .then(response => setData(response.data.articles))
}
getData();
},[])

  return (
    <div className="App">
       <Navbar />
       <List data={data} />
    </div>
  );
}

export default App;
