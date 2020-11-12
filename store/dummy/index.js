export const state = () => ({
  dummy: 'init dummy',
});

export const getters = {
  getDummy: (state) => {
    return state.dummy;
  },
};

export const mutations = {
  SET_DUMMY: (state, data) => {
    state.dummy = data;
  },
};

const resoleData = [
  {
    title: 'this is a dummy 1',
    id: 32132,
    visible: true,
  },
  {
    title: 'this is a dummy 2',
    id: 123321,
    visible: false,
  },
  {
    title: 'this is a dummy 3',
    id: 231245,
    visible: true,
  },
  {
    title: 'this is a dummy 4',
    id: 1213252,
    visible: false,
  },
];

const rejectData = {
  message: 'Request failed with a status code 401',
};

function dummyEndpoint() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(resoleData);
      // reject(rejectData);
    }, 2000);
  });
}
export const actions = {
  async fetchDummy({ commit }) {
    try {
      // const data = await dummyEndpoint();
      const data = await 'test';
      commit('SET_DUMMY', data);
    } catch (error) {
      console.log(error);
    }
  },
};
