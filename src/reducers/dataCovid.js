export default (data = [], action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return action.payload;
    default:
      return data;
  }
};
