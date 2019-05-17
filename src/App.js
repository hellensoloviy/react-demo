import React, { Component } from 'react'
import Table from './Table';

class App extends Component {
  render() {
    return (
      <div className='container'>
      <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
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

}

export default App
