// const API_URL = 'http://192.168.1.9:4000/api';
const API_URL = 'https://bhxh.thuynhung.store';
const API_URL_TOKEN = 'https://bhxh.thuynhung.store/BHXHLogin';
const API_URL_CONFIG = {
  API_URL: 'https://bhxh.thuynhung.store',
  Hub: 'https://bhxh.thuynhung.store/bhxh',
  API_URL_TOKEN: 'https://bhxh.thuynhung.store/BHXHLogin',
};

// const API_URL_CONFIG = {
//   API_URL: 'http://local.dsvinames.com:8081',
//   API_URL_TOKEN: 'http://local.dsvinames.com:8081/Login',
// };



// const API_URL_CONFIG = {
//   API_URL: 'http://api.dsvinames.com',
//   API_URL_TOKEN: 'http://api.dsvinames.com/Login',
// };

// const API_URL = 'https://bhxh.thuynhung.store';
// const API_URL_TOKEN = 'https://bhxh.thuynhung.store/Login'

const userData = {
  id: 0,
  userName: null,
  password: null,
  license:null,
  fullName: null,
  roles: null,
  active: true,
  createOn: null,
  connectionId: null,
  macAddress: null,
  token: null,
  securityCode:null,
  BIOMETRICS: '',
  isPremium: null,
};
const SignalRContextData = { value: {} };
export { API_URL, userData, API_URL_TOKEN, API_URL_CONFIG, SignalRContextData };
