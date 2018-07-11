import ReactDOM from 'react-dom';
import React from 'react';
import Provider from 'react-redux';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';
import store from './store/store.js';


ReactDOM.render(
  <Provider store={store}>
    <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} />,
    document.getElementById('app')
  </Provider>
);
