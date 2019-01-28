<template lang="pug">
  page
    #terminal
</template>

<script>
import 'xterm/dist/xterm.css'
import 'xterm/lib/addons/fullscreen/fullscreen.css'
import { Terminal } from 'xterm'
import * as fullscreen from 'xterm/lib/addons/fullscreen/fullscreen'
Terminal.applyAddon(fullscreen)
export default {
  name: 'xterm',
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const xterm = new Terminal()
      xterm.open(document.getElementById('terminal'))
      // xterm.toggleFullScreen(true)
    }
  }
}
</script>
