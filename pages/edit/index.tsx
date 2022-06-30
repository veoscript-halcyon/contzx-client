import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import DefaultLayout from '../../layouts/Default'

const EditIndex = () => {
  React.useEffect(() => {
    Router.push('/')
  })
  return (
    <React.Fragment>
      <Head>
        <title>Contzx</title>
      </Head>
      <DefaultLayout>
        <h1 className="font-bold text-xl">Loading...</h1>
      </DefaultLayout>
    </React.Fragment>
  )
}

export default EditIndex