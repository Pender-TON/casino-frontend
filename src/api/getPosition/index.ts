import axios from '@config/axios';

type GetPosition = {
  key: 'getPosition:get';
  queryFn: ({ userId }: { userId: number }) => Promise<{ position: number }>;
};

export const getPosition: GetPosition = {
  key: 'getPosition:get',
  queryFn: async payload => {
    const { data } = await axios.post('getPosition', { ...payload });

    return data;
  },
};
