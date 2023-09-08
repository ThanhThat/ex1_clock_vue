<template>
  <div class="clock">
    <h1 class="clock-title">DIGITAL CLOCK</h1>
    <div class="clock-main">
      <span class="clock-box clock-hour">
        <span class="clock-box-header">{{ checkNumber(h) }}</span>
        <span class="clock-box-footer">Hours</span>
      </span>
      <span class="clock-box clock-min">
        <span class="clock-box-header">{{ checkNumber(m) }}</span>
        <span class="clock-box-footer">Minutes</span>
      </span>
      <span class="clock-box clock-sec">
        <span class="clock-box-header">{{ checkNumber(s) }}</span>
        <span class="clock-box-footer">Seconds</span>
      </span>
      <div class="clock-ampm">
        <span>{{ ampm }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapStores } from 'pinia'
import useClockStore from '../stores/clock'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(useClockStore, ['ampm', 'h', 'm', 's']),
    ...mapStores(useClockStore)
  },
  created() {
    this.clockStore.updateClock()
  },
  methods: {
    checkNumber(number) {
      return number < 10 ? '0' + number : number
    }
  }
}
</script>

<style lang="scss" scoped>
.clock {
  &-title {
    font-size: 2rem;
    text-align: center;
    color: #fff;
    letter-spacing: 4px;
    margin-bottom: 1.6rem;
    text-shadow: 0 0 6px rgba(0 0 0 / 0.6);
  }
  &-main {
    display: flex;
    gap: 1.2rem;
    position: relative;
  }

  &-box {
    display: flex;
    flex-direction: column;
    width: 12rem;
    height: 12rem;

    &-header {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #836fca;
      height: 70%;
      opacity: 0.8;
      font-size: 5rem;
      color: #fff;
    }

    &-footer {
      background-color: #302894;
      height: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      font-weight: 500;
      color: #fff;
      font-size: 1.2rem;
      letter-spacing: 1.8px;
    }
  }

  &-ampm {
    display: flex;
    align-items: end;
    position: absolute;
    height: 100%;
    bottom: 0;
    right: -7rem;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #339123;
      height: 30%;
      width: 6rem;
      color: #fff;
      letter-spacing: 1.8px;
      font-size: 2rem;
      text-shadow: 0 0 6px rgba(0 0 0 / 0.6);
    }
  }
}
</style>
