import { mount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import dashboard from '@/pages/index';
import { resolvePromises } from './test-utils';
import '@testing-library/jest-dom';

const localVue = createLocalVue();
localVue.use(Vuex);
Vue.use(Vuetify);

let store;

beforeAll(async () => {
  const storePath = `${process.env.buildDir}/store.js`;
  const NuxtStore = await import(storePath);
  store = await NuxtStore.createStore();
});

const factory = () => {
  return mount(dashboard, {
    vuetify: new Vuetify(),
    localVue,
    store,
  });
};

describe('Dashboard', () => {
  test('Renders', () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);
  });

  test('Old fetch', async () => {
    const wrapper = factory();
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    await wrapper.vm.$options.fetch({ store });
    await resolvePromises();
    expect(dispatchSpy).toHaveBeenCalledWith('dummy/fetchDummy');
  });

  /* test('Fetches', async () => {
    const wrapper = factory();
    const dispatchSpy = jest.spyOn(store);
    console.log(store);
    await wrapper.vm.$options.fetch();
    await resolvePromises();
    console.log(store);
    expect(dispatchSpy.dispatch).toHaveBeenCalledWith('dummy/fetchDummy');
  }); */
});
