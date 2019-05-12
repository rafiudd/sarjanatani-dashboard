export default {
  serverApiURI: 'http://127.0.0.1:8000',
  baseURI: function() {
    let baseUrl = window.location.protocol + '//' + window.location.host
    /*
      if (window.location.port !== '') {
      baseUrl += ':' + window.location.port + '/'
    }
    */
    return baseUrl + '/'
  },
  fixedLayout: false,
  hideLogoOnMobile: false
}
