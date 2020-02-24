<template lang="html">
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{stock.name}}
          <small>(Price: {{stock.price}}) | Quantity: {{stock.quantity}}</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number"
          class="form-control" placeholder="Quantity"
          v-model="quantity"
          :class="{danger: InsufficientQuantity}">
        </div>
        <div class="pull-right">
          <button class="btn btn-success" @click="sellStock" :disabled="InsufficientQuantity || quantity <= 0 || !Number.isInteger(Number(quantity))">{{InsufficientQuantity ? 'Not enough' : 'Sell'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: Number(this.quantity)
      }

      // if (this.quantity > this.stock.quantity) {
      //   alert('Insufficient quantity')
      // } else {
      //   this.placeSellOrder(order)
      //   this.quantity = 0
      // }
      this.placeSellOrder(order)
      this.quantity = 0
    }
  },
  computed: {
    InsufficientQuantity() {
      return this.quantity > this.stock.quantity
    }
  }
}
</script>

<style lang="css" scoped>
.danger {
  border: 1px solid red
}
</style>
