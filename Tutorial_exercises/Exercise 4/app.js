new Vue({
  el: '#exercise',
  data: {
    isHighlight: false,
    textCss: 'red',
    styleValue: 'yellow',
    width: 50
  },
  computed: {
    myStyle() {
      return {
        backgroundColor: this.styleValue,
        width: '200px !important'
      }
    },
    progressBar() {
      return {
        backgroundColor: this.styleValue,
        width: this.width + 'px',
        // border: '1px solid black',
        height: '50px'
      }
    }
  },
  methods: {
    startEffect() {
      setInterval(()=>{
        return this.isHighlight = !this.isHighlight
      }, 2000)
    },
    progressStart() {
      setInterval(()=>{
        this.width < 200 ? this.width +=10 : this.width = 10
        // return this.width += 10
      },500)
    }
  }
});
