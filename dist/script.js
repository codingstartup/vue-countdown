new Vue({
  el: '#app',
  data: {
    size: 600,
    stroke: 30,
    percentage: 100,
    timer: null,
    seconds: 5,
  },
  computed: {
    radius() {
      return (this.size / 2) - (this.stroke / 2);
    },
    circleOffset() {
      return this.size / 2;
    },
    circumference() {
      return this.radius * 2 * Math.PI;
    },
    progress() {
      return this.circumference - this.circumference * this.percentage / 100;
    },
    countdown() {
      return Math.ceil(this.seconds * this.percentage / 100)
    }
  },
  methods: {
    animate() {
      this.timer = setInterval(() => {
        this.percentage -= 1/10;

        if (this.percentage <= 0) {
          clearInterval(this.timer)
          this.percentage = 100;
        }
      }, this.seconds * 1000 / 100 / 10)
    }
  }
})