import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import DefaultLayout from '../../layouts/Default'
import EditContact from '../../components/Forms/EditContact'
import api from '../../lib/Axios'

interface IProps {
  contactDetails: any
}

const EditID: NextPage<IProps> = ({ contactDetails }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Contzx (Edit Contact)</title>
      </Head>
      <DefaultLayout>
        <EditContact contactDetails={contactDetails} />
      </DefaultLayout>
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
  const { params } = ctx
  const { data: contactDetails} = await api.get(`/api/contact/${params?.id}`)
  return {
    props: {
      contactDetails
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get('/api/contacts')
  const contacts = await response.data

  return {
    paths: contacts.map((contact: { id: string }) => ({
      params: {
        id: String(contact.id)
      },
    })),
    fallback: 'blocking'
  }
}

export default EditID
