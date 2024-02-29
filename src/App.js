// import {Component} from 'react'; use in class component
import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.components';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import React from 'react';

const App = () =>{
  const [searchField, setSearchField] = useState('');
  const [monsters, SetMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => SetMonsters(users));
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters,searchField])
  

  const onSearchChange= (event)=> {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
          <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} 
            placeholder='search monsters'
          />
          <CardList monsters={filteredMonsters}/>
      </div>
  )
}

// class App extends Component {
//   constructor(){
//     super();

//     this.state={
//       monsters:[],
//       searchField: '',
//     };
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) =>
//       this.setState(
//         ()=> {
//           return {monsters: users}
//         }
//       )
//      )
//   }

//   onSearchChange= (event)=> {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     }
//     );
//   }

//   render(){

//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
      
//         {/* {filteredMonsters.map((monster)=>
//           {
//             return(
//               <div key={monster.id}>
//                 <h1>{monster.name}</h1>
//               </div>
//             );
//           })} */}

//           <h1 className='app-title'>Monsters Rolodex</h1>
//           <SearchBox className='search-box' onChangeHandler={onSearchChange} />
//           <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
  
// }

export default App;
