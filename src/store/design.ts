interface DesignState {
  schema: object;
}

export default {
  state: {
    schema: {}
  },
  mutations: {
    UPDATE_SCHEMA: function(state: DesignState, payload: object) {
      console.log(state, payload);
    }
  },
  actions: {}
};
