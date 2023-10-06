import video from "../data/video.js";
import videoData from "../data/video.js";
import Video from "./Video.js";

function App() {

  return (
    <div className="App">
      <Video videoData={videoData} />
    </div>
  );
}

export default App;
