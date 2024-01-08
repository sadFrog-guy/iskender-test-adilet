import api from '../../services/api/index';

const branches = {
  state: {
    data: [],
  },
  reducers: {
    setBranches: (state, payload) => ({
      ...state,
      data: payload,
    }),
  },
  effects: (dispatch) => ({
    async getBranches() {
      const {
        data: { branches },
      } = await api.get('/getBranches');

      dispatch.branches.setBranches(branches || []);
    },
  }),
};

export default branches;
