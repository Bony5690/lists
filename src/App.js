import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
state = {
  userInput: ''
}

  inputChangedHandler = (event) => {
   this.setState({userInput: event.target.value})
  }

deleteChangedHandler = (index) => {
 const text = this.state.userInput.split('');
 text.splice(index, 1);
 const updateText = text.join('');
 this.setState({userInput: updateText})

}

  render() {
    const charList = this.state.userInput.split('').map((char, index) => {
      return  <Char
        character={char}
        key={index}
      clicked={() => this.deleteChangedHandler(index)}/>;
    });

    return (
      <div className="App">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.</p>
        <input type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}/>
          <p>{this.state.userInput}</p>
          <Validation inputLength={this.state.userInput.length}/>
          {charList}
      </div>
    );
  }
}

export default App;
