<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data () {
    return {
      chartdata: {
        labels: [],
        datasets: [
          {
            label: 'Total Purchase Per Category',
            backgroundColor: '#f87979',
            data: []
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  computed: {
    data () {
      return this.$store.state.chartData
    }
  },
  created () {
    this.$store.dispatch('getCategories')
      .then(({ data }) => {
        var chartLabel = []
        var chartData = []
        for (const category of data.data) {
          chartLabel.push(category.name)
          var totalPurchase = 0
          for (const item of category.Products) {
            totalPurchase += (item.price * item.stock)
          }
          chartData.push([0, totalPurchase])
        }
        this.$store.commit('setChartData', { label: chartLabel, data: chartData })
      })
      .catch((err) => console.log(err))
  },
  mounted () {
    this.chartdata.labels = this.data.label
    this.chartdata.datasets[0].data = this.data.data
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

<style>

</style>
