import { TableContainer, TableCaption, Thead, Tr, Th, Tbody, Td, Table as ChakraTable } from '@chakra-ui/react'
import { ITable } from 'domain/entities'
import React from 'react'

const Table = ({headers, data}: ITable): JSX.Element => {
  return (
    <TableContainer>
      <ChakraTable variant='striped'>
        <TableCaption>Users</TableCaption>
        <Thead>
          <Tr>
            {headers.map((header => <Th key={header}>{header}</Th>))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row => <Tr key={row[0]}>
            {row.map(value => {
              const returnValue = Array.isArray(value) ? value.join(', ') : value;
              return <Td key={value}>{returnValue}</Td>
            } )}
          </Tr>))}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  )
}

export default Table