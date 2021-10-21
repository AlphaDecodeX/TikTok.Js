import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video url="https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-in-a-pool-1259-large.mp4"
          channel='redLady'
          description='Swimming Jazz'
          song='ABCD Song'
          likes={123}
          messages={456}
          shares={345}
        />
        <Video url="https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-in-a-pool-1259-large.mp4"
          channel='redLady'
          description='Swimming Jazz'
          song='ABCD Song'
          likes={1237}
          messages={4756}
          shares={415}
        />


      </div>

      {/* App Container */}
      {/* Videos */}
      {/* <Videos/> */}
      {/* <Videos/> */}
      {/* <Videos/> */}
    </div>
  );
}

export default App;
