const getProtocol = window.location.protocol;
const getHostName = window.location.hostname;
export const endPoints = process.env.NODE_ENV == 'development' ?
    document.documentElement.lang == 'vi-VN' ? 'https://vpb-test-net02.hn.smartosc.com/api/' : 'https://vpb-test-net02.hn.smartosc.com/en/api/' :
    document.documentElement.lang == 'vi-VN' ? (getProtocol + '//' + getHostName + '/api/') : (getProtocol + '//' + getHostName + '/en/api/');