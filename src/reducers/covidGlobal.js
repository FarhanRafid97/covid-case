export default (data = [], action) => {
  switch (action.type) {
    case 'FETCH_GLOBAL':
    case 'FETCH_DEATH':
      return action.payload;
    default:
      return data;
  }
};
