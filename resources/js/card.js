import Card from "./components/Card.vue"

Nova.booting((Vue, router, store) => {
  Vue.component('info-card', Card)
})
