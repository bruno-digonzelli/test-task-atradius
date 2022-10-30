import { TableContainer, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Table as ChakraTable } from '@chakra-ui/react'
import { ITable } from 'domain'
import React from 'react'

const Table = ({headers, data}: ITable): JSX.Element => {
console.log({data})
  return (
    <TableContainer>
      <ChakraTable variant='striped'>
        <TableCaption>Users</TableCaption>
        <Thead>
          <Tr>
            {headers.map((header => <Th>{header}</Th>))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row => <Tr>
            {row.map(value => {
              const returnValue = Array.isArray(value) ? value.join(', ') : value;
              return <Td>{returnValue}</Td>
            } )}
          </Tr>))}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  )
}

export default Table