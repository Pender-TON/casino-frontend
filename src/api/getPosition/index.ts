import axios from '@config/axios';

type GetPosition = {
  key: 'getPosition:get';
  queryFn: ({ userId }: { userId: number }) => Promise<{ position: number }>;
};

const request: GetPosition = {
  key: 'getPosition:get',
  queryFn: async payload => {
    const { data } = await axios.post('getPosition', { ...payload });

    return data;
  },
};

export default request;
