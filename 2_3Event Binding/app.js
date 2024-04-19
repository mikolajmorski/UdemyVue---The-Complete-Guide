const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increaseCounter() {
      this.counter++;
    },
    reduceCounter() {
      this.counter--;
    },
  },
});

app.mount("#events");
