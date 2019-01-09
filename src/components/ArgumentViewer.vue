<template>
  <div class="viewer">

    <div class="previous-arg">
      <button
        :disabled="this.previousArg === null"
        @click="back()">
        Back
      </button>
    </div>

    <div
      v-html="currentArg.text"
      class="argument-text"
    />

    <div class="replies">
      <div
        v-for="(reply, i) in currentArg.replies"
        :key="i"
        class="reply"
        @click="pickReply(reply)"
      >
        {{ reply.text }}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    currentArg: {
      type: Object,
      required: true
    },

    previousArg: {
      type: [String, null],
      default: null
    }
  },

  methods: {
    back () {
      this.$emit('back', this.previousArg)
    },

    pickReply (reply) {
      this.$emit('pickReply', reply)
    }
  }
}
</script>

<style scoped>
.previous-arg {
  position: fixed;
  top: 30px;
  left: 40px;
}

.viewer {
  position: absolute;
  top: 50%;
  margin-top: -200px;
  left: 0;
  width: 100%;
}

.argument-text {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-size: 30px;
}

.replies {
  margin-top: 200px;
}

.reply {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  font-size: 25px;
  padding: 10px;
  border: solid 2px grey;
  border-radius: 10px;
  cursor: pointer;
}

.reply:hover {
  color: blue;
  border-color: blue;
}
</style>
