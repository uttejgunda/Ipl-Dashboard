import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachTeamData} = props

  return (
    <Link to={`/team-matches/${eachTeamData.id}`} className="link-tag">
      <li className="team-item">
        <img
          src={eachTeamData.teamImageUrl}
          className="team-logo"
          alt={eachTeamData.name}
        />
        <p className="team-name">{eachTeamData.name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
