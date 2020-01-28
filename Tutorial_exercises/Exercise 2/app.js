new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
          alertMe() {
            alert('This is an alert')
          },
          showValue() {
            this.value=event.target.value
          }
        }
    });
