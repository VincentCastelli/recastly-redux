import Redux from 'redux';
const sampleData = [];

const videoListReducer = (state = sampleData, action) => {
  if (action.type === 'CHANGE_VIDEO_LIST') {
    return state = action.videos;
  }
  return state;
};

export default videoListReducer;
