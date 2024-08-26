// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

class CowinDashboard extends Component {
  state = {data: [], isLoading: true, isFailure: false}

  componentDidMount() {
    this.getCowinData()
  }

  getCowinData = async () => {
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data1 = await response.json()
      this.setState({data: data1, isLoading: false})
    } else {
      this.setState({isLoading: false, isFailure: true})
    }
  }

  renderFailureView = () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png "
        alt="failure view"
        className="failure"
      />
      <h1 className="fail">Something Went Wrong</h1>
    </div>
  )

  renderLoaderView = () => (
    <div data-testid="loader" style={{textAlign: 'center'}}>
      <Loader type="ThreeDots" color="#2d87bb" height={80} width={80} />
    </div>
  )

  renderSuccessView = data => (
    <>
      <VaccinationCoverage barChartData={data.last_7_days_vaccination} />
      <VaccinationByGender genderData={data.vaccination_by_gender} />
      <VaccinationByAge ageData={data.vaccination_by_age} />
    </>
  )

  render() {
    const {data, isLoading, isFailure} = this.state

    let content

    switch (true) {
      case isLoading:
        content = this.renderLoaderView()
        break
      case isFailure:
        content = this.renderFailureView()
        break

      default:
        content = this.renderSuccessView(data)
        break
    }

    return (
      <div className="bg-container">
        <div className="website-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="website-logo"
          />
          <h1 className="main-heading">Co-WIN</h1>
        </div>
        <h1 className="heading">CoWIN Vaccination In India</h1>
        {content}
      </div>
    )
  }
}

export default CowinDashboard
