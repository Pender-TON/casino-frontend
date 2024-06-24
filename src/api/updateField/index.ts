import axios from '@config/axios'

type UpdateField = {
  key: 'updateField:post'
  queryFn: (payload: { id: number; userName: string; count: number }) => Promise<number>
}

export const updateField: UpdateField = {
  key: 'updateField:post',
  queryFn: async payload => {
    const { id, userName, count } = payload
    const { data } = await axios.post('updateField', { id, userName, count })

    return data
  }
}
