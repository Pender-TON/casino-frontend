import axios from '@config/axios';

type UpdateField = {
  key: 'updateField:post';
  queryFn: (payload: {
    userId: number;
    userName: string;
    count: number;
  }) => Promise<number>;
};

export const updateField: UpdateField = {
  key: 'updateField:post',
  queryFn: async payload => {
    const { data } = await axios.post('updateField', { ...payload });

    return data;
  },
};
