import { fetcher } from 'application/services'
import { Container, Table } from 'application/UI'
import { getFormattedUserData } from 'domain/useCases'
import { API_URL } from 'domain/constants'
import React from 'react'
import useSWR from 'swr'

const Users = () => {
const { data, error } = useSWR(`${API_URL}/users`, fetcher)

if (error) return <div>failed to load</div>;
if (!data) return <div>loading...</div>;

const usersTableData = getFormattedUserData(data.message);

  return (
    <Container maxW='container.xl' width={'100%'} mt='32'>
      <Table headers={['First name', 'Last name', 'Hobby', 'Zip Code']} data={usersTableData} />
    </Container>
  )
}

export default Users;
