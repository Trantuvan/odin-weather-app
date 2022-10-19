const handleError =
  (fn) =>
  (...params) =>
    fn(...params).catch((err) => console.log('Oops!', err));

export default handleError;
