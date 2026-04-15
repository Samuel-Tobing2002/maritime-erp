<template>
  <Doughnut :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Doughnut } from "vue-chartjs";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const props = defineProps({
  labels: Array,
  data: Array,
  colors: Array,
});

const chartData = {
  labels: props.labels,
  datasets: [
    {
      data: props.data,
      backgroundColor: props.colors,
      borderWidth: 0,
    },
  ],
};

const chartOptions = {
  responsive: true,
  cutout: "70%", // bikin donut
  plugins: {
    legend: {
      display: false,
    },
  },
};
</script>