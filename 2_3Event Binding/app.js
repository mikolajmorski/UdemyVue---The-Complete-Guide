const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    increaseCounter(num) {
      this.counter = this.counter + num;
    },
    reduceCounter(num) {
      this.counter = this.counter - num;
    },
    updateName(event, secondNeme) {
      this.name = event.target.value + " " + secondNeme;
    },
  },
});

app.mount("#events");
