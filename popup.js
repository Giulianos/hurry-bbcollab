function setSpeed() {
  const speed = document.getElementById('speed-value').value;
  chrome.tabs.executeScript({
    code: `document.getElementsByClassName('jw-video')[0].playbackRate=${speed}`
  });
  return false;
}
function init(){
  document.getElementById('speed-form').onsubmit = setSpeed;
}
window.onload = init;
