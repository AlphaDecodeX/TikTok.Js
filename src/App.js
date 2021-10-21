import './App.css';
import Video from './Video';
import axios from './axios.js';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/v2/posts');
      setVideos(response.data);
      return response;
    }
    fetchPosts();
  }, [])

  console.log(videos);

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
