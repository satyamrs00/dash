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
import axios from 'axios';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/line`)

export const options = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
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
            display: false,
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
            },
            ticks: {
                callback: function (value, index, values) {
                    if ((value+1) % (Object.keys(res.data[0]).length / 5) === 0) {
                        if (value === 29) return null;
                        console.log(value)
                        return "Week " + ((value+1) / (Object.keys(res.data[0]).length / 5)) ;
                    }
                    return null
                },
                padding: 6,
            },
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
    labels: Object.keys(res.data[0]),
    datasets: [
        {
            label: 'Guest',
            data: Object.values(res.data[0]),
            borderColor: '#E9A0A0',
            backgroundColor: '#E9A0A0',
            tension: 0.35,
        },
        {
            label: 'User',
            data: Object.values(res.data[1]),
            borderColor: '#9BDD7C',
            backgroundColor: '#9BDD7C',
            tension: 0.35,
        },
    ],
};


const Linechart = () => {
    return (
        <>
            <div className='w-full flex justify-end gap-8 items-center'>
                {data.datasets.map((item, index) => (
                    <div className='flex items-center gap-2'>
                        <div className='w-3 h-3 rounded-full' style={{ backgroundColor: item.backgroundColor}}></div>
                        <div>
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <Line data={data} options={options} />
            </div>
        </>
    )
}

export default Linechart