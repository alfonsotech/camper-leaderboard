import React from 'react'
import {
  TableRowColumn,
  TableRow
} from 'material-ui/Table'
import './Camper.css'

const Camper = ({camper, number, ...otherProps }) => {

    return (
      <TableRow {...otherProps} className="table-row">
        <TableRowColumn>{number}</TableRowColumn>
        <TableRowColumn><a href={`https://freecodecamp.com/${camper.username}`} target="_blank">{camper.username}</a></TableRowColumn>
        <TableRowColumn>{camper.recent}</TableRowColumn>
        <TableRowColumn>{camper.alltime}</TableRowColumn>
      </TableRow>
    )

}

export default Camper;
