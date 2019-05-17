import React, { Component } from 'react'


const TableHeader = props => {
  //some test new value just to try
  const newElement = {name: 'Nick', job: 'Tester'}

  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <td>
          <button onClick={() => props.addCharacter(newElement)}>New example</button>
        </td>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    const { characterData, removeCharacter, addCharacter } = this.props

    return (
      <table>
        <TableHeader addCharacter={addCharacter} />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    )
  }
}

export default Table
