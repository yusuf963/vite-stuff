import { connect } from "react-redux";
type VideoType = {
  id: number;
  title: string;
  description: string;
  src: string;
};

const Video = ({ state }) => {
  const { count, videos } = state;
  return (
    <div>
      <h1>Video</h1>
      {state.count} Video
      <div>
        {state.videos.map((el: VideoType) => {
          return (
            <div key={el.id}>
              {" "}
              <h3>{el.title}</h3>
              <video width="320" height="240" controls src={el.src} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state: state.videos };
};

export default connect(mapStateToProps)(Video);
