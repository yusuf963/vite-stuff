import { connect } from "react-redux";

const TrainLine = ({ station }) => {
  return (
    <div>
      <p> this is TrainLine Update</p>
      <p>THE TRAIN IS IN {station}</p>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    station: state.trainsStore.station,
  };
}

export default connect(mapStateToProps)(TrainLine);
