import Head from 'next/head'
import React from 'react'
import { auth } from '../firebase/clientApp'
import { useAuthState } from 'react-firebase-hooks/auth'
import { dehydrate, useQuery } from 'react-query'
import { queryClient, getUsers, userByUsername } from '../src/api'
import DefaultHome from '../components/DefaultHome'
import AuthenticatedHome from '../components/AuthenticatedHome'

const Home = () => {
  const [user, loading, error] = useAuthState(auth)
  const { data } = useQuery(["users"], () => getUsers())

  return (<>
    <Head>
      <title>Home - Songiverse</title>
    </Head>

    <DefaultHome />
    {/*user ? <AuthenticatedHome /> : <DefaultHome />*/}
  </>)
}

export async function getStaticProps() {

  await queryClient.prefetchQuery("users", () => getUsers())
  await queryClient.prefetchQuery("user", () => userByUsername({ username: "Joe" }))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Home
