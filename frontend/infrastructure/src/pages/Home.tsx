import React from 'react'
import { Center, Text } from 'application/UI';
import useSWR from 'swr'

const Home = () => {
  // @ts-ignore
  const fetcher = (...args) => window.fetch(...args).then(res => res.json())

  const { data, error } = useSWR('http://localhost:3000/', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

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