<template>
  <div id="app">

    <argument-viewer
      :current-arg="currentArg"
      :previous-arg="previousArg"
      @back="goBack"
      @pickReply="handleReply"
    />

  </div>

</template>

<script>
import ArgumentViewer from './components/ArgumentViewer.vue'
import args from './assets/arguments.js'

export default {
  name: 'App',

  components: {
    ArgumentViewer
  },

  data () {
    return {
      args,
      argPosition: {
        current: 'start',
        previous: null
      }
    }
  },

  computed: {
    currentArg () {
      return this.args[this.argPosition.current]
    },

    previousArg () {
      return this.argPosition.previous
    }
  },

  methods: {
    goBack () {
      this.$set(this.argPosition, 'current', this.argPosition.previous)
      this.$set(this.argPosition, 'previous', null)
    },

    handleReply (reply) {
      this.$set(this.argPosition, 'previous', this.argPosition.current)
      this.$set(this.argPosition, 'current', reply.counter)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
