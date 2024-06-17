import axios from '@config/axios'

type DbInit = {
  key: 'dbInit:post';
  queryFn: (payload: { userId: number; userName: string }) => Promise<number>;
};

const request: DbInit = {
  key: 'dbInit:post',
  queryFn: async payload => {

    const { data } = await axios.post('dbInit', { ...payload });

    return data;
  },
};

export default request;
