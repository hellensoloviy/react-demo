import React, { Component } from 'react'
import Table from './Table';

class App extends Component {
  render() {
    return (
      <div className='container'>
      <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} addCharacter={this.addCharacter} />
      </div>
    )
  }

  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      }
    ],
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

}

export default App
