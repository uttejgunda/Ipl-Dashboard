import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesData: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }

    this.setState({teamMatchesData: updatedData, isLoading: false})
  }

  renderMatchCards = () => {
    const {teamMatchesData} = this.state
    const {recentMatches} = teamMatchesData

    return (
      <ul className="match-cards-list-container">
        {recentMatches.map(eachMatch => (
          <MatchCard details={eachMatch} key={eachMatch.id} />
        ))}
      </ul>
    )
  }

  renderLatestMatches = () => {
    const {teamMatchesData} = this.state
    return (
      <>
        <img
          className="team-banner"
          src={teamMatchesData.teamBannerUrl}
          alt="team banner"
        />

        <h1 className="sub-title">Latest Matches </h1>

        <LatestMatch details={teamMatchesData.latestMatchDetails} />

        {this.renderMatchCards()}
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <div className={`team-matches-bg-container ${id}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" width={50} height={50} />
          </div>
        ) : (
          this.renderLatestMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
