import api from '../../services/api/index';

const orders = {
  state: {
    data: [],
  },
  reducers: {
    setOrders: (state, payload) => ({
      ...state,
      data: payload,
    }),
  },
  effects: (dispatch) => ({
    async getOrders(params) {
      const {
        data: { objects },
      } = await api.get(`/api/getOrders${params}`);

      dispatch.orders.setOrders(objects || []);
    },
  }),
};

export default orders;
