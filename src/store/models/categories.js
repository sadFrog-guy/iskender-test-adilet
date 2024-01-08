import api from '../../services/api/index';

const categories = {
  state: {
    data: [],
  },
  reducers: {
    setCategories: (state, payload) => ({
      ...state,
      data: payload,
    }),
  },
  effects: (dispatch) => ({
    async getCategories() {
      const {
        data: { objects },
      } = await api.get('/api/getCategories');

      dispatch.categories.setCategories(objects || []);
    },
  }),
};

export default categories;
