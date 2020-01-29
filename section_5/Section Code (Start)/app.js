Vue.component('hello', {
  template: '<h1>Hello!</h1>'
})

new Vue({
  el: '#app',
  data: {
    title: 'The VueJS Instance'
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
  },
  methods: {
    destroy() {
      this.$destroy()
    }
  }
})


var vm1 = new Vue({
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText = 'Test'
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount('#app1')

console.log(vm1.$data.showParagraph);
vm1.$refs.heading.innerText = "Something else"

setTimeout(()=>{
  vm1.title="Changed by Timer"
  vm1.show()
}, 3000)

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second Instance'
  },
  methods: {
    onChange() {
      vm1.title="Changed!"
    }
  }
});

var vm3 = new Vue({
  // el: 'hello',
  // el: '.hello',
  template: '<h1>Hello!</h1>'
})

vm3.$mount()
document.getElementById('app3').appendChild(vm3.$el)
