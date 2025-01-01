<template>
  <div class="bar">
    <Bar
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>
import { Bar } from "vue-chartjs/legacy";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
export default {
  name: "BarView",
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 300,
    },
    height: {
      type: Number,
      default: 250,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      chartData: {
        labels: ["TypeScript", "JavaScript", "Python", "Java", "C++"],
        datasets: [
          {
            data: [40, 15, 35, 7, 3],
            backgroundColor: [
              "#074799",
              "#FFD65A",
              "#4DA1A9",
              "#5CB338",
              "#4C585B",
            ],
          },
        ],
      },
      chartOptions: {
        responsive: false,
        scales: {
          y: {
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, ticks) {
                console.log(index, ticks);
                console.clear();
                return value + " %";
              },
            },
          },
        },
        plugins: {
          legend: {
            position: "bottom",
            display: false,
          },
          title: {
            display: true,
            text: "Most used Programming Languages",
          },
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
.bar {
  padding: 20px;
  width: 100%;
  max-width: 500px;
  display: flex !important;
  #canvas {
    background-color: #f5f5f5;
    width: 100%;
    max-height: 200px;
    padding: 10px;
    border-radius: 5px;
    max-width: 500px;
    margin: 0px auto;
  }
}
</style>
