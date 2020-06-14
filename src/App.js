import React from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import Scroll from './Scroll';



class App extends React.Component{
  constructor() {
    super ();
    this.state={
      robots: [],
      searchField:''
    }
    }
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response =>response.json())
  .then(users=>this.setState({robots: users}))
  // var request = new XMLHttpRequest();
  //
  // // request.onreadystatechange = function () {
  // //   if (request.readyState==4 && request.status==200){
  // //     console.log(request.responseText)
  // //     this.setState({robots: request.responseText})
  // //   }
  // //     }
  //
  // var URL = "https://jsonplaceholder.typicode.com/users";
  // request.open('GET',URL,false);
  // request.send();
  // console.log(request.responseText)
  // this.setState({robots: [request.responseText]})
  }



  onSearchChange=(event)=>{
    this.setState({searchField: event.target.value})
   }
  render(){
    const filteredRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return(
      <div className="tc">
        <h2>RoboFriends</h2>


        <SearchBox searchChange={this.onSearchChange}/>

        <Scroll>
        <Cardlist robots={filteredRobots}/>
        </Scroll>
      </div>
    );
  }

}


export default App;
