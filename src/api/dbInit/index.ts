import axios from '@config/axios';

type DbInit = {
  key: 'dbInit:post';
  queryFn: (payload: { userId: number; userName: string; address: string }) => Promise<number>;
};

export const dbInit: DbInit = {
  key: 'dbInit:post',
  queryFn: async payload => {
    const { data } = await axios.post('dbInit', { ...payload });

    return data;
  },
};
