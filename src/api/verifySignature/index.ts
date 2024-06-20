import axios from '@config/axios'
import WebApp from '@twa-dev/sdk'

type VerifySignature = {
  key: 'verifySignature:post'
  queryFn: (payload: { initData: string }) => Promise<{
    auth_date: number
    chat_instance: string
    chat_type: Exclude<typeof WebApp.initDataUnsafe.chat_type, undefined>
    user: {
      allows_write_to_pm: boolean
      first_name: string
      id: number
      language_code: string
      last_name: string
      username: string
    }
  }>
}

export const verifySignature: VerifySignature = {
  key: 'verifySignature:post',
  queryFn: async payload => {
    const { initData } = payload
    const { data } = await axios.post('verifySignature', initData)

    return data
  }
}
