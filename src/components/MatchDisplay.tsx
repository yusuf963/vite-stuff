import { connect } from 'react-redux';

const MatchDisplay = ({ match }) => {
  return (
    <div>
      <p>Match Display</p>
      <p>
        {match.teamOne} VS {match.teamTwo}
      </p>
      <p>
        Score: {match.teamOneScore} - {match.teamTwoScore}
      </p>
      {match.isMatchStarted && !match.isMatchEnded && <p> Match is going</p>}
      {match.isMatchEnded && (
        <div>
          <p> Match Ended</p>
          <p>
            {match.teamOneScore !== match.teamTwoScore
              ? `Winner: ${match.winner()}`
              : 'Match Draw'}
          </p>
        </div>
      )}
      <p>--------------</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    match: state.match
  };
};

export default connect(mapStateToProps)(MatchDisplay);
