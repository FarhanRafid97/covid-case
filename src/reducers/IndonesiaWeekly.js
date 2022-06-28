export default (data = [], action) => {
  switch (action.type) {
    case 'DATA_WEEEKLY_INDONESIA':
      return action.payload;
    default:
      return data;
  }
};
