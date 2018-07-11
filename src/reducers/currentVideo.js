import Redux from 'redux';

const currentVideoReducer = (state = null, action) => {
  if (action.type === 'CHANGE_VIDEO') {
    return state = action.video;
  }
  return state;
};

export default currentVideoReducer;
