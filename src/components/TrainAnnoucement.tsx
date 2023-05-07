import { useState } from 'react';
import { connect } from 'react-redux';
import { announceTrainAction } from '../store/train/action';
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';

const TrainLineAnnoucer = ({ dispatchData, station }) => {
  const [annoucement, setAnnouement] = useState('');
  const handleChange = (event) => {
    const value = event.target.value;
    setAnnouement(value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatchData(annoucement);
    setAnnouement('');
  };
  return (
    <div>
      <p>{station}</p>
      <input
        onChange={handleChange}
        type="text"
        name="train"
        value={annoucement}
      />
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </div>
  );
};
// use ownProps to have accessto the native props attached
// to the connect component
const mapStateToProps = (state, ownProps) => {
  return { station: state.trains.station };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchData: (annoucement) => dispatch(announceTrainAction(annoucement))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TrainLineAnnoucer);
