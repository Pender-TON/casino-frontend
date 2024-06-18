import axios from '@config/axios';

type GetDocument = {
  key: 'getDocument:get';
  queryFn: () => Promise<Array<Record<string, string>>>;
};

export const getDocument: GetDocument = {
  key: 'getDocument:get',
  queryFn: async () => {
    const { data } = await axios.get('getDocument');

    return data;
  },
};
