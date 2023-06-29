import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    aspectRatio: 3,
    plugins: {
        legend: {
            position: 'top',
            align: 'end',
            labels: {
                usePointStyle: true,
                boxHeight: 6,
                boxWidth: 6,
                pointStyle: 'circle',
                color: '#000000',
                padding: 10,
            }
        },
        title: {
            display: true,
            text: 'Activities',
            align: 'start',
            font: {
                size: 20,
                weight: 'bold',
            },
            color: '#000000',
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            }
        },
        y: {
            grid: {
                display: true,
            },
            ticks: {
                stepSize: 100,
            },
            min: 0,
            max: 500,
        },
    },
    elements: {
        point: {
            radius: 0,  
        },
    },
}

export const data = {
    labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    datasets: [
        {
            label: 'Guest',
            data: [200, 260, 340, 400, 375, 350, 325, 300, 275, 250, 225, 200, 212, 225, 238, 250, 275, 300, 284, 268, 252, 236, 220, 245, 270, 295, 320, 345, 395, 420],
            borderColor: '#E9A0A0',
            backgroundColor: '#E9A0A0',
            tension: 0.35,
        },
        {
            label: 'User',
            data: [100, 160, 240, 300, 375, 420, 375, 300, 275, 240, 200, 170, 212, 252, 292, 335, 375, 400, 370, 340, 310, 280, 240, 210, 180, 200, 200, 220, 240, 250],
            borderColor: '#9BDD7C',
            backgroundColor: '#9BDD7C',
            tension: 0.35,
        },
    ],
};


const Linechart = () => {
    return (
        <Line data={data} options={options} />
    )
}

export default Linechart