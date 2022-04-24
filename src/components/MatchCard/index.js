import './index.css'

const MatchCard = props => {
  const {details} = props
  const updatedDetails = {
    competingTeam: details.competing_team,
    competingTeamLogo: details.competing_team_logo,
    date: details.date,
    firstInnings: details.first_innings,
    id: details.id,
    manOfTheMatch: details.man_of_the_match,
    matchStatus: details.match_status,
    result: details.result,
    secondInnings: details.second_innings,
    umpires: details.umpires,
    venue: details.venue,
  }
  console.log(updatedDetails)
  let resultTextColor

  if (updatedDetails.matchStatus === 'Won') {
    resultTextColor = 'green'
  } else {
    resultTextColor = 'red'
  }

  console.log(resultTextColor)

  return (
    <li className="match-card-bg-container">
      <img
        src={updatedDetails.competingTeamLogo}
        alt={`competing team ${updatedDetails.competingTeam}`}
        className="match-card-competing-logo"
      />
      <p className="match-card-competing-team">
        {updatedDetails.competingTeam}
      </p>
      <p className="match-card-result">{updatedDetails.result}</p>
      <p className={`match-status ${resultTextColor}`}>
        {updatedDetails.matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
