export default (data = [], action) => {
  switch (action.type) {
    case 'FETCH_SUMBAR':
      return console.log(action.payload);
    default:
      return data;
  }
};
