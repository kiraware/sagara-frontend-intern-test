'use client'

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// Define the data for the bar chart
const data = {
  labels: ['Back End', 'Front End', 'Quality Assurance', 'UI/UX'],
  datasets: [
    {
      label: 'Number of Students',
      data: [289, 200, 300, 125],
      backgroundColor: 'rgb(165, 21, 53)', // Color of the bars
      borderColor: 'rgb(165, 21, 53)', // Border color of the bars
      borderWidth: 1, // Border width of the bars
    },
  ],
}

// Define the options for the bar chart
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Student',
      font: {
        size: 20,
      },
    },
    tooltip: {
      callbacks: {
        label: function (context: any) {
          return `${context.label}: ${context.raw}`
        },
      },
    },
  },
  scales: {
    x: {
      beginAtZero: true, // Start the x-axis at zero
    },
    y: {
      beginAtZero: true, // Start the y-axis at zero
      ticks: {
        stepSize: 100, // Step size of the ticks on the y-axis
      },
      max: 400,
    },
  },
}

export default function StudentBarChart() {
  return (
    <div className="h-96 w-full">
      <Bar data={data} options={options} />
    </div>
  )
}
