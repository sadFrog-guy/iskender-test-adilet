import api from '../../services/api/index';

const stories = {
  state: {
    data: [],
  },
  reducers: {
    setStories: (state, payload) => ({
      ...state,
      data: payload,
    }),
  },
  effects: (dispatch) => ({
    async getStories() {
      const {
        data: { objects },
      } = await api.get('/getStories');

      dispatch.stories.setStories(objects || []);
    },
  }),
};

export default stories;
