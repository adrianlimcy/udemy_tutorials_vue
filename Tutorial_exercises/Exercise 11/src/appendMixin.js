export const appendMixin = {
  data() {
    return {
      text: "test text from mixin"
    }
  },
  computed: {
    computedReverseText() {
      return this.text.split("").reverse().join("")
    },
    computedAppend() {
      let count = this.text.split(" ").join("").split("").length

      return this.text + " (" + count + ")"
    }
  }
}
