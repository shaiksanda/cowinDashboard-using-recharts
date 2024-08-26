// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {genderData} = props
  console.log(genderData)
  return (
    <div className="chart">
      <h2 style={{color: '#cbd5e1'}}>Vaccination By Gender</h2>
      <div className="pie-chart">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={genderData}
              startAngle={180}
              endAngle={0}
              dataKey="count"
              innerRadius="40%"
              outerRadius="70%"
            >
              <Cell name="Male" fill=" #f54394" />
              <Cell name="Female" fill="#5a8dee" />
              <Cell name="Others" fill=" #64c2a6" />
            </Pie>
            <Legend
              iconType="circle"
              layout="horizontal"
              verticalAlign="middle"
              align="center"
              wrapperStyle={{marginTop: 50}}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default VaccinationByGender
