import axios from '@config/axios'

type UpdateAddress = {
  key: 'updateAddress:post'
  queryFn: (payload: { id: number; address: string }) => Promise<{ multiplier: number }>
}

export const updateAddress: UpdateAddress = {
  key: 'updateAddress:post',
  queryFn: async payload => {
    const { id, address } = payload
    const { data } = await axios.post('updateAddress', { id, address })

    return data
  }
}
