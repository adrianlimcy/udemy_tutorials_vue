new Vue({
  el: '#app',
  data: {
    show: true,
    showAlso: false,
    ingredients: ['meat','fruit','cookies'],
    persons: [
      {name: 'Max', age: 27, color: 'red'},
      {name: 'Anna', age: 'unknown', color: 'blue'}
    ]
  },
  methods: {
    changeShows(){
      this.show = !this.show
      this.showAlso = !this.showAlso
    },
    changeShowAlso(){
      this.showAlso = !this.showAlso
    }
  }
});
