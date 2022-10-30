import React from 'react'
import { Center, Text } from 'application/UI';
import { fetcher } from 'application/services';
import useSWR from 'swr';
import { API_URL } from 'domain/constants';

const Home = () => {
const { data, error } = useSWR(`${API_URL}/`, fetcher)

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const { message } = data;

  return (
    <Center height={'100vh'}>
        <Text fontSize={'5xl'} color="blue.200" fontWeight={'bold'}>
          {message}
        </Text>
    </Center>
  )
}

export default Home