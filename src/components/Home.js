import React, { Component } from 'react';

export default class Home extends Component {
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
