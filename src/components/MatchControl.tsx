import { useState } from "react";
import { connect } from "react-redux";
import {
  setMatchAction,
  updateScoreAction,
  endMatchAction,
  startMatchAction,
} from "../store/match/action";
const MatchControl = ({
  setMatch,
  matchStarted,
  updateScore,
  matchEnded,
  match,
}) => {
  const [matchStart, setMatchStart] = useState(false);
  const [matchEnd, setMatchEnd] = useState(false);
  const [teamsName, setTeamsName] = useState({
    teamOne: "",
    teamTwo: "",
  });
  const [teamsScore, setTeamsScore] = useState({
    teamOneScore: 0,
    teamTwoScore: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setMatch({
      teamOne: teamsName.teamOne,
      teamTwo: teamsName.teamTwo,
    });
    matchStarted(matchStart);
    updateScore(teamsScore);
    matchEnded(matchEnd);
  };
  return (
    <div className="match-display">
      <label>Match state</label>
      <p>{match.winner()}</p>
      <p>Match Control</p>
      <p>Team One</p>
      <input
        onChange={(e) =>
          setTeamsName({ ...teamsName, teamOne: e.target.value })
        }
        type="text"
        value={teamsName.teamOne}
        name="teamOne"
      />
      <p>Team Two</p>
      <input
        onChange={(e) =>
          setTeamsName({ ...teamsName, teamTwo: e.target.value })
        }
        type="text"
        value={teamsName.teamTwo}
        name="teamTwo"
      />
      <br></br>
      <br></br>
      <span>Match Started</span>
      <input
        onChange={() => setMatchStart(!matchStart)}
        type="checkbox"
        checked={matchStart}
        name="matchStarted"
      />
      <br></br>
      <span>Match Ended</span>
      <input
        onChange={() => setMatchEnd(!matchEnd)}
        type="checkbox"
        checked={matchEnd}
        name="matchEnded"
      />
      <p>Team one score</p>
      <input
        onChange={(e) =>
          setTeamsScore({ ...teamsScore, teamOneScore: Number(e.target.value) })
        }
        type="number"
        value={teamsScore.teamOneScore}
        name="teamOneScore"
      />
      <p>Team two score</p>
      <input
        onChange={(e) =>
          setTeamsScore({ ...teamsScore, teamTwoScore: Number(e.target.value) })
        }
        type="number"
        value={teamsScore.teamTwoScore}
        name="teamTwoScore"
      />
      <p>Winner</p>
      <button onClick={handleSubmit} type="submit">
        Save
      </button>
      <p>------------</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    match: state.matchStore,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMatch: (match) => dispatch(setMatchAction(match)),
    matchStarted: (isStarted) => dispatch(startMatchAction(isStarted)),
    updateScore: (score) => dispatch(updateScoreAction(score)),
    matchEnded: (isEnded) => dispatch(endMatchAction(isEnded)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MatchControl);
