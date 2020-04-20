chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  const videos = document.getElementsByClassName('jw-video')
  if (videos.length != 1) {
    sendResponse({type:'ERROR', errorDesc: 'Incompatible site'});
    return;
  }
  switch (msg.type) {
    case 'GET_VALUE':
      sendResponse({type:'SPEED_VALUE', value: videos[0].playbackRate});
      break;
    case 'SET_VALUE':
      videos[0].playbackRate = msg.value;
      sendResponse({type: "OK"});
      break;
    default:
      sendResponse({type:'ERROR', errorDesc: 'Invalid message type'});
  }
});
