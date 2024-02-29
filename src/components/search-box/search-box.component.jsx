// import { Component } from "react";
import './search-box.styles.css';

const SearchBox = ({className, placeholder, onChangeHandler}) => (
    <input className={`search-box ${className}`} 
    type='search' 
    placeholder={placeholder} 
    onChange={onChangeHandler} />
);
// class SearchBox extends Component{

//     render(){
//         return(
//             <input className={this.props.className} 
//             name='search' 
//             type='search' 
//             placeholder='search monsters' 
//             onChange={this.props.onChangeHandler} 
//         />
//         )
//     }

// }

export default SearchBox;