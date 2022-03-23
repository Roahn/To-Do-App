// import logo from './logo.svg';
import React from 'react';
import './App.css';
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''
  ,
tasks: [{task:"Enter Name ",id:1}],};

  }

  handleChange=(event) =>{
    this.setState({value: event.target.value});
  }
  handleDelete=(id) =>{
   let narr = this.state.tasks.filter((obj)=>{return obj.id != id;});
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
      <form 
      // onSubmit={this.handleSubmit}
      >
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        {/* <input type="submit" value="Submit" /> */}
        <button type="button" onClick={this.handleSubmit}>Submit Now </button>
        <ul >
          {this.state.tasks.map((obj)=>(
            <li key={obj.id}>
              <p>{obj.id}</p>
              <p>{obj.task}</p>
               <button onClick={() =>this.handleDelete(obj.id)}>Delete</button>
            </li>
           
          ))}
          
        </ul>
      </form>
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
