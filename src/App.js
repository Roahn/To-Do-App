// import logo from './logo.svg';
import React from 'react';
import './App.css';
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', tasks: [] };
// {task:"Enter Name ",id:1}
  }

  handleChange=(event) =>{
    this.setState({value: event.target.value});
  }
  handleDelete=(id) =>{
   let narr = this.state.tasks.filter((obj)=>{return obj.id !== id;});
   this.setState({tasks:[...narr]});
  }
  handleSubmit = (event)=> {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { task: this.state.value, id: this.state.tasks.length+1 },
      ],
      value: '',
    });
    event.preventDefault();
  }

  render() {
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>TO DO App</h1>
        <br></br>
        <br></br>
        <form
        // onSubmit={this.handleSubmit}
        >
          <section className='DataEntry'>
            <input
              className='form-control inputfield'
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
            />

            {/* <input type="submit" value="Submit" /> */}
            <button
              type='button'
              className='btn btn-success btn-lg addtask '
              onClick={this.handleSubmit}
            >
              Add Task{' '}
            </button>
          </section>
          <br></br>
          <br></br>
          <ul>
            {this.state.tasks.map((obj, index) => (
              <div key={obj.id} className='container card text-center'>
                {/* <p className='number card-header'>{index + 1}</p> */}
                <p className='task_entry card-text'>{obj.task}</p>
                <button
                  onClick={() => this.handleDelete(obj.id)}
                  className='btn btn-secondary done'
                >
                  Done
                </button>
              </div>
            ))}
          </ul>
        </form>
       
      </>
    );
  }
}

// ReactDOM.render(
//   <NameForm />,
//   document.getElementById('root')
// );
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default NameForm;
