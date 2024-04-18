const app = Vue.createApp({
  data() {
    return {
      messageA: "<h2>Finish the course and learn Vue!</h2>",
      messageB: "Master the Vue!",
      vueLink: "https://google.com/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.messageA;
      } else {
        return this.messageB;
      }
    },
  },
});

app.mount("#user-goal");
