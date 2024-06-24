import axios from '@config/axios'

type GetPosition = {
  key: 'getPosition:get'
  queryFn: ({ id }: { id: number }) => Promise<{ position: number }>
}

export const getPosition: GetPosition = {
  key: 'getPosition:get',
  queryFn: async payload => {
    const { id } = payload
    const { data } = await axios.post('getPosition', { id })

    return data
  }
}
