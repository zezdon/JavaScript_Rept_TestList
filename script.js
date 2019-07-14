function getRootUrl() {
  document.getElementById('rootresult').innerHTML += 
  window.location.origin 
      ? window.location.origin + '/'
      : window.location.protocol + '/' + window.location.host + '/';
  
  //
  getBaseUrl();
}

function getBaseUrl() {
  var re = new RegExp(/^.*\//);
  document.getElementById('baseresult').innerHTML += re.exec(window.location.href);
}