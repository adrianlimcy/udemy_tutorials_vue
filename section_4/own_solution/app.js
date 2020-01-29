new Vue({
  el: "#app",
  data:{
    ownHealthBarWidth: 100,
    monsterHealtBarWidth: 100,
    history: []
  },
  computed: {
    ownHealthBar() {
      return {
        backgroundColor: 'green',
        margin: 0,
        color: 'white',
        width: this.ownHealthBarWidth + '%'
      }
    },
    monsterHealtBar() {
      return {
        backgroundColor: 'green',
        margin: 0,
        color: 'white',
        width: this.monsterHealtBarWidth + '%'
      }
    }
  },
  watch: {
    ownHealthBarWidth() {
      if (this.ownHealthBarWidth <= 0) {
        this.giveUp()
      }
    },
    monsterHealtBarWidth() {
      if (this.monsterHealtBarWidth <= 0) {
        alert('You win!')
        this.newGame()
      }
    }

  },
  methods: {
    attackCal(value) {
      return Math.floor(Math.random()*10 + value)
    },
    newGame() {
      this.ownHealthBarWidth = 100
      this.monsterHealtBarWidth = 100
      this.history = []
    },
    attack() {
      let damageToMonster = this.attackCal(0)
      let damageByMonster = this.attackCal(0)
      this.monsterHealtBarWidth -= damageToMonster
      this.ownHealthBarWidth -= damageByMonster
      this.history.push({
        damageToMonster: damageToMonster,
        damageByMonster: damageByMonster
      })
      // console.log(this.history);
    },
    specialAttack() {
      let specialDamage = this.attackCal(10)
      let specialDamageByMonster = this.attackCal(10)
      this.monsterHealtBarWidth -= specialDamage
      this.ownHealthBarWidth -= specialDamageByMonster
      this.history.push({
        damageToMonster: specialDamage,
        damageByMonster: specialDamageByMonster
      })
    },
    heal() {
      let heal = this.attackCal(0)
      this.ownHealthBarWidth < 100 ? (this.ownHealthBarWidth += heal) : (this.ownHealthBarWidth = 100)
      this.history.push({
        healToSelf: heal
      })
    },
    giveUp() {
      alert('You lose')
      this.newGame()
    }

  }
})
