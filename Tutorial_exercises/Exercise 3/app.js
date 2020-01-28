new Vue({
        el: '#exercise',
        data: {
            value: 0,
        },
        computed: {
          result() {
            return this.value < 37 ? 'not there yet' : 'done'
          }
        },
        watch: {
          result(value) {
            var vm = this
            setTimeout(()=>{
              vm.value=0
            }, 5000)
          }
        }
    });
