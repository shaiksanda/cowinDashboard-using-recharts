// Write your code here
import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'

const VaccinationByAge = props => {
  const {ageData} = props
  console.log(ageData)
  return (
    <div className="chart">
      <h2 style={{color: '#cbd5e1'}}>Vaccination By Age</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={ageData} startAngle={0} endAngle={360} dataKey="count">
            <Cell name="18-44" fill="#5a8dee" />
            <Cell name="44-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            marginTop={50}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
