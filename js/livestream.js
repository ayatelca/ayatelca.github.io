params = { AllowScriptAccess: 'always' };
function livestreamPlayerCallback(event) {
  if (event == 'ready') {
player = document.getElementById("splayer");
  	player.setDevKey('VI1Wwbhlzgbz3ziVxzSnKUYvh02xPFYAQ5hE_6NpuZtxVU2o5xR3A9ryt87U-v_6Yvy-olEww8-ZwyqOvG9BKA');
  	player.load('ayatelca');	
  }

  log = document.getElementById('log');
  log.innerHTML = log.innerHTML + '<br/>' + event; 
}
swfobject.embedSWF("http://cdn.livestream.com/chromelessPlayer/v21/playerapi.swf",
  "livestreamPlayer", "400", "300", "9.0.0", "expressInstall.swf", null, params);
