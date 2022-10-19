// *top level handleError, only catch 404 error right now
const handleError =
  (fn) =>
  (...params) =>
    fn(...params).catch((err) => {
      if (err.status === 404) {
        // render error page
        console.log('page not found');
      }

      // catch other errors than 404
      // include error if promise not resolved
      console.log('Oops! Something went wrong', err);
    });

export default handleError;
