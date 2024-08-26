// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {barChartData} = props
  console.log(barChartData)
  const DataFormatter = number => {
    if (number > 1000) {
      return `${number / 1000}.toString()}K`
    }
    return number.toString()
  }
  return (
    <div className="chart">
      <h2 style={{color: '#cbd5e1'}}>Vaccination Coverage</h2>
      <ResponsiveContainer width={1000} height={500}>
        <BarChart data={barChartData} margin={{top: 5}}>
          <XAxis
            dataKey="vaccine_date"
            tick={{stroke: 'red', strokeWidth: 1}}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{stroke: '#1c1c2b', strokeWidth: 1}}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
              strokeWidth: 2,
            }}
          />
          <Bar
            radius={[15, 15, 0, 0]}
            dataKey="dose_1"
            name="Dose 1"
            fill="#2d87bb"
            barSize="20%"
          />
          <Bar
            radius={[15, 15, 0, 0]}
            dataKey="dose_2"
            name="Dose 2"
            fill="#f54394"
            barSize="20%"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
