import { useEffect, useState } from 'react';
import { ListCard } from './components/card';
import { Search } from './components/search';
import axios from 'axios';
import './App.scss';

function App() {

  const [cards, setCards] = useState([]); //! Здесь все данные, или данные от поиска
  const [search, setSearch] = useState(); //! Здесь строка из инпута

  useEffect(() => {
    try {
      if(search) {
        //! Получаем данные введенные в поиск - поиск по имени
        const getFilterUser = async() => {
          const {data} = await axios.get(`http://127.0.0.1:3000?term=${search}`)
          setCards(data);
        }
        getFilterUser();
        }else {
          //! Получаем все данные
          const getUsers = async() => {
            const {data} = await axios.get('http://127.0.0.1:3000')
            setCards(data);
          }
        getUsers();
      } 
    } catch (error) {
      console.log(error);
    }
  }, [search, cards]);

  return (
    <div className='wrapper'>
      <Search search={search} onChange={setSearch} />
      <ListCard cards={cards} />
    </div>
  );
}

export default App;
