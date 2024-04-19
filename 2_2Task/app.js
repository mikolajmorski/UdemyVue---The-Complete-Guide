const app = Vue.createApp({
  data() {
    return {
      name: "Mikołaj",
      age: 32,
      fawNum: Math.random(),
      cat: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VTsTN947wxfPvR6azPju20BotT7BNvh_VZLnjduuNQ&s",
    };
  },
  methods: {
    faworiteNumber() {
      const rand = Math.random();
      return rand;
    },
  },
});

app.mount("#assignment");
