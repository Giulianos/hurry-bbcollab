function setSpeed() {
  const speed = document.getElementById('speed-value').value;
  let ok;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {type: 'SET_VALUE', value: speed}, function(response) {
      ok = response.type == "OK";
    });
  });
  if (!ok) {
    console.log('error setting speed');
  }
  this.close();
  return false;
}

function getSpeed(callback) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {type: 'GET_VALUE'}, function(response) {
      let speed = "1.0";
      if (response.type != 'ERROR') {
        speed = response.value;
      }
      callback(speed)
    });
  });
}

function setInputValue(value) {
  const input = document.getElementById('speed-value');
  input.value = value;
}

function init(){
  getSpeed(setInputValue)
  document.getElementById('speed-form').onsubmit = setSpeed;
}
window.onload = init;
