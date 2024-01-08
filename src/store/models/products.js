import api from '../../services/api/index';

const products = {
  state: {
    data: [],
  },
  reducers: {
    setProducts: (state, payload) => ({
      ...state,
      data: payload,
    }),
  },
  effects: (dispatch) => ({
    async getProducts(params) {
      const {
        data: { objects },
      } = await api.get(`/api/getProducts${params}`);

      dispatch.products.setProducts(objects || []);
    },
  }),
};

export default products;
