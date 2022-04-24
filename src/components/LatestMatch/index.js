import './index.css'

const LatestMatch = props => {
  const {details} = props

  return (
    <div className="latest-match-container">
      <div className="latest-match-top-section">
        <div className="latest-match-top-section-text-container">
          <p className="latest-match-titles">{details.competing_team}</p>
          <p className="latest-match-titles">{details.date}</p>
          <p className="latest-match-desc">{details.venue}</p>
          <p className="latest-match-desc">{details.result}</p>
        </div>
        <img
          src={details.competing_team_logo}
          alt={`latest match ${details.competing_team}`}
          className="competing-logo"
        />
      </div>
      <img
        src={details.competing_team_logo}
        alt={`latest match ${details.competing_team}`}
        className="competing-logo-lg"
      />
      <hr className="hr-tag" />
      <div className="latest-match-bottom-section">
        <p className="latest-match-sub-title">First Innings</p>
        <p className="latest-match-sub-desc">{details.first_innings}</p>
        <p className="latest-match-sub-title">Second Innings</p>
        <p className="latest-match-sub-desc">{details.second_innings}</p>
        <p className="latest-match-sub-title">Man Of The Match</p>
        <p className="latest-match-sub-desc">{details.man_of_the_match}</p>
        <p className="latest-match-sub-title">Umpires</p>
        <p className="latest-match-sub-desc">{details.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
