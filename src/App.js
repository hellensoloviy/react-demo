import React, { Component } from 'react'
import Table from './Table';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className='container'>
      <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} addCharacter={this.addCharacter} />
      <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }

  state = {
    characters: [],
  }

  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
 }

 addCharacter = props => {
   const { characters } = this.state
   characters.push({
     name: props.name,
     job: props.job,
   })

   this.setState({
     characters: characters
   })
 }

 handleSubmit = character => {
   this.setState({ characters: [...this.state.characters, character] })
 }

}

export default App
