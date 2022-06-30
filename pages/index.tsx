import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import DefaultLayout from '../layouts/Default'
import Table from '../components/Table'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Contzx</title>
      </Head>
      <DefaultLayout>
        <Table />
      </DefaultLayout>
    </React.Fragment>
  )
}

export default Home
