const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
//      fullname: ''
    };
  },
  watch: {
    counter(value) {
      if (value > 500) {
        this.counter = 0;
      }
    }
//    name(value) {
//      if (value === '') {
//        this.fullname = '';
//      } else {
//        this.fullname = value + ' ' + 'Tamayo';
//      }
//    }
  },
  computed: {
    fullname() {
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
      this.lastName = '';
    }
  }
});

app.mount('#events');
