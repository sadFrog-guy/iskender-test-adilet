import api from '../../services/api/index';

const news = {
  state: {
    data: [],
  },
  reducers: {
    setNews: (state, payload) => ({
      ...state,
      data: payload,
    }),
  },
  effects: (dispatch) => ({
    async getNews() {
      const {
        data: { objects },
      } = await api.get('/api/getNews');

      dispatch.news.setNews(objects || []);
    },
  }),
};

export default news;
