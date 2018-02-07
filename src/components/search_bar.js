import React from 'react';


// const SearchBar = () => {
//     return <input />;
// }

//converting fucntional compnent to a class component
class SearchBar extends React.Component {
    render = () => {
        return <input onChange = {
            this.onInputChange
        }
        />;
    }

    onInputChange = () => {
        alert("clicked");
    }
}
export default SearchBar;