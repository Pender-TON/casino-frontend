import axios from '@config/axios'

type GetDocument = {
  key: 'getDocument:get';
  queryFn: () => Promise<Array<Record<string, string>>>;
};

const request: GetDocument = {
  key: 'getDocument:get',
  queryFn: async () => {
    const { data } = await axios.get('getDocument');

    return data;
  },
};

export default request;