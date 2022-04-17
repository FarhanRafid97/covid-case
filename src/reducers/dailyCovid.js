export default (data = [], action) => {
  switch (action.type) {
    case 'FETCH_DAILY':
      return action.payload;
    default:
      return data;
  }
};
