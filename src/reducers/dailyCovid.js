export default (data = [], action) => {
  switch (action.type) {
    case 'FETCH_DAILY':
    case 'FETCH_DEATH_DAILY':
      return action.payload;
    default:
      return data;
  }
};
