import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import DefaultLayout from '../layouts/Default'
import AddContact from '../components/Forms/AddContact'

const New: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Contzx (New Contact)</title>
      </Head>
      <DefaultLayout>
        <AddContact />
      </DefaultLayout>
    </React.Fragment>
  )
}

export default New
