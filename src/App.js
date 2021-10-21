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

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(video => (
          <Video
            url={video.url}
            channel={video.channel}
            song={video.song}
            likes={video.likes}
            messages={video.messages}
            description={video.description}
            shares={video.shares}
          />
        ))}

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
