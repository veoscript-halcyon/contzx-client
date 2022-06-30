import { useQuery, useMutation, useQueryClient } from 'react-query'
import Router from 'next/router'
import api from './Axios'

// GET ALL CONTACTS QUERY
export const useGetContacts = () => {
  return useQuery('contacts',
    async () => {
      const contacts = await api.get('/api/contacts')

      if (contacts.statusText === "OK") {
        return contacts.data
      } else {
        const json = await contacts
        throw String(json.statusText)
      }
    }
  )
}

// CREATE NEW CONTACT MUTATION
export const useStoreContact = () => {
  const queryClient = useQueryClient()
  return useMutation((_args: { name: string, phone: string, address: string, gender: string, status: string }) =>
    api.post('/api/create-contact', {
      name: _args.name,
      phone: _args.phone,
      address: _args.address,
      gender: _args.gender,
      status: _args.status
    }),
    {
      onSettled: () => {
        queryClient.invalidateQueries('contacts')
        Router.push('/')
      }
    }
  )
}

// UPDATE SPECIFIC CONTACT MUTATION
export const useUpdateContact = () => {
  const queryClient = useQueryClient()
  return useMutation((_args: { id: string, name: string, phone: string, address: string, gender: string, status: string }) =>
    api.put(`/api/update-contact/${String(_args.id)}`, {
      name: _args.name,
      phone: _args.phone,
      address: _args.address,
      gender: _args.gender,
      status: _args.status
    }),
    {
      onSettled: () => {
        queryClient.invalidateQueries('contacts')
        Router.push('/')
      }
    }
  )
}

// DELETE SPECIFIC CONTACT MUTATION
export const useDeleteContact = () => {
  const queryClient = useQueryClient()
  return useMutation((_args: { id: string }) =>
    api.delete(`/api/delete-contact/${String(_args.id)}`),
    {
      onSettled: () => {
        queryClient.invalidateQueries('contacts')
        Router.push('/')
      }
    }
  )
}