import { defineStore } from 'pinia'

const useClockStore = defineStore('clock', {
  state: () => {
    return {
      ampm: 'AM',
      h: null,
      m: null,
      s: null
    }
  },

  getters: {
    getClock(state) {
      return state
    }
  },

  actions: {
    updateClock() {
      this.h = new Date().getHours()
      this.m = new Date().getMinutes()
      this.s = new Date().getSeconds()

      if (this.h > 12) {
        this.h -= 12
        this.ampm = 'PM'
      }

      setTimeout(() => {
        this.updateClock()
      }, 1000)
    }
  }
})

export default useClockStore
