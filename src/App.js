import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
		projects: []
	};

  componentDidMount() {
   const dataAPI = 'http://localhost:3000';
   axios.get(dataAPI + '/test')
     .then((response) => {
       this.setState({
         projects: response.data
       });
     })
     .catch( (error) => {
       console.log(error);
     }
   );
  }

  render() {
		const { projects } = this.state;
    var arr =[]; //Array of arrays

    Object.keys(projects)
      .map((key) => {
        const list = projects[key];
        arr.push(list);
    });

    return (
      <div>

      </div>
    );
  }
}

export default App;
