<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <p>Hello from dashboard</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <pre>{{ dummy || 'no dummy' }}</pre>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  fetchOnServer: false,
  async fetch({ store }) {
    await store.dispatch('dummy/fetchDummy');
    // await this.fetchDummy();
  },
  computed: {
    ...mapGetters({
      dummy: 'dummy/getDummy',
    }),
  },
  methods: {
    ...mapMutations({ SET_DUMMY: 'dummy/SET_DUMMY' }),
    ...mapActions({ fetchDummy: 'dummy/fetchDummy' }),
  },
};
</script>
