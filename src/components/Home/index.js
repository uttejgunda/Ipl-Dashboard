import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {iplData: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedTeams = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({iplData: updatedTeams, isLoading: false})
  }

  renderHome = () => {
    const {iplData} = this.state
    console.log(iplData)
    return (
      <>
        <div className="main-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-image"
          />
          <h1 className="logo-title">IPL Dashboard</h1>
        </div>
        <ul className="teams-list-container">
          {iplData.map(eachTeam => (
            <TeamCard eachTeamData={eachTeam} key={eachTeam.id} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-bg-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="BallTriangle" width={50} height={50} />
          </div>
        ) : (
          this.renderHome()
        )}
      </div>
    )
  }
}
export default Home
