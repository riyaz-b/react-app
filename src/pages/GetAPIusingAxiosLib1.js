import axios from 'axios';
import React, { Component } from 'react';

class MyComponentAxios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    const apiUrl2 = 'https://jsonplaceholder.typicode.com/todos/1';
    axios.get(apiUrl2)
      .then(response => {
        this.setState({ data: response.data, loading: false });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }

  handleChangeData = () => {
    // Change the id field in the data
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        id: 9899,
        completed:true,
      },
    }));
  };

  render() {
    const { data, loading, error } = this.state;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data) return <p>No data to display.</p>;

    return (
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <button onClick={this.handleChangeData}>Change ID</button>
        <pre>{JSON.stringify(data, null, 2)}</pre>
   
        <pre>{JSON.stringify(data, null, 2)}</pre>
   
      </div>
    );
  }
}

export default MyComponentAxios;
