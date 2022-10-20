// *top level handleError => log error to console
// *catch error from promise is being rejected (server error)
// *catch error being throw from fulfillment but response.status !== 200
const handleError =
  (fn) =>
  (...params) =>
    fn(...params).catch((err) => {
      // *this err object here contains 2 properties
      // *message and stacktrace
      // *message come from new Error instance throw by fetch
      // *or err from weather api itself

      console.log('Oops! Something went wrong', err);
    });

export default handleError;
