const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increaseCounter(num) {
      this.counter = this.counter + num;
    },
    reduceCounter(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
