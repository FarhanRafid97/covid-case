export default (data = [], action) => {
  switch (action.type) {
    case 'FETCH_SUMBAR':
      return action.payload;
    default:
      return data;
  }
};
