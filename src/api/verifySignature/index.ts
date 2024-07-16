import axios from '@config/axios'

type UserStats = {
  auth_date: number
  id: number
  is_premium: boolean
  language_code: string
  username: string

  count: number
  address: string | null
  gems: number
  multiplier: number
  tonBalance: number
}

type VerifySignature = {
  key: 'verifySignature:post'
  queryFn: (payload: { initData: string }) => Promise<UserStats>
}

export const verifySignature: VerifySignature = {
  key: 'verifySignature:post',
  queryFn: async payload => {
    const { initData } = payload
    const { data } = await axios.post('verifySignature', initData)

    return data
  }
}
