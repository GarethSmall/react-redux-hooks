//@flow
/**
 * Takes a condition returns nothing or throws an error.
 * @param {boolean} isError
 * @param {string} isErrorMessage
 * @returns {void | Error}
 * @private
 */
function throwErrorOnCondition(
  isError : boolean,
  isErrorMessage : string,
) : void | Error {
  if (isError) {
    throw new Error(isErrorMessage);
  }
}

export default throwErrorOnCondition;
