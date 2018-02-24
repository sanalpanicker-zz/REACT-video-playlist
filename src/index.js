import React, { Component } from 'react';// {Component} equivalent to let Component  = React.component
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDa0FgHgIZBu3Hk4EHAJByrhGeZBBdkzCY';


//Class based component
class App extends Component{
    constructor(){
        super();
        this.state = {videos: []};
        YTSearch({ key : API_KEY, term : 'happy' }, (videos)=> {
            this.setState({videos}); //ES6 videos = videos
        });
    }

    render = () => {
    return  (
    <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
    </div>
    );
    }
}
//functional component
// const App = () => {
//     return (
//     <div>
//         <SearchBar />
//     </div>
//     );
// }

ReactDOM.render(< App />, document.querySelector('.container'));
