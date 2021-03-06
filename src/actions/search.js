import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


const handleVideoSearch = (q) => {
  return (dispatch) => {
    searchYouTube({ key: YOUTUBE_API_KEY, query: q }, (items) => {
      dispatch(changeVideoList(items));
      dispatch(changeVideo(items[0]));
    });
  };
};

export default handleVideoSearch;
