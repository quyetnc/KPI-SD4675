function formatMoney(num = 0) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

const convertDate = date => {
  if (!emtyValue(date)) {
    const dateShow = date.slice(0, 10).split('-').reverse().join('/');
    return dateShow;
  } else {
    return '';
  }
};

const convertToStringDate = date => {
  if (!emtyValue(date)) {
    const dateShow = date
      .toISOString()
      .slice(0, 10)
      .split('-')
      .reverse()
      .join('/');
    return dateShow;
  }
};

const emtyValue = value => {
  if (
    value === undefined ||
    value === null ||
    value.length === 0 ||
    value === {} ||
    value === ''
  ) {
    return true;
  } else {
    return false;
  }
};
const validEmail = (email = '') => {
  const valid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return valid.test(email);
};
const arrayIsEmpty = array => {
  if (objectIsNull(array) || array.length === 0) {
    return true;
  } else {
    return false;
  }
};
const objectIsNull = object => {
  if (object === null || object === undefined || object === '(null)') {
    return true;
  } else {
    return false;
  }
};
export {
  formatMoney,
  convertDate,
  emtyValue,
  validEmail,
  convertToStringDate,
  arrayIsEmpty,
  objectIsNull,
};
