import { Component } from 'react';

class LifecycleComponent extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }

  async componentDidMount() {
    console.log('Class Start!');
    try {
      const response = await fetch(
        'https://todo-redev.herokuapp.com/api/todos',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtvbmRybGlhQGdtYWlsLmNvbSIsImlkIjoxNzE4LCJpYXQiOjE3NTY5OTI4Mjl9.imWua3ScafN9ON_rCjGnUgOSQbIuPapd2rcybPK5n1M'}`,
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('error: ', error);
    }
  }

  componentDidUpdate() {
    console.log('Update class');
    console.log(this.state.count);
  }

  componentWillUnmount() {
    console.log('Oops! Delete class.');
  }

  shouldComponentUpdate(prop, stat) {
    return stat.count % 2 === 0;
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Class component</h1>
        <p>Количество: {this.state.count}</p>
        <button onClick={this.increment}>{this.state.count}</button>
      </div>
    );
  }
}

export default LifecycleComponent;
