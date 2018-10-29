//@flow
/**
 * Takes a condition returns nothing or throws an error.
 * @param {boolean} isWarn
 * @param {string} isWarnMessage
 * @returns {void}
 * @private
 */
function warnOnCondition(isWarn : boolean, isWarnMessage : string) : void {
  if (isWarn) {
    /* eslint-disable no-console */
    console.warn(isWarnMessage);
  }
}

export default warnOnCondition;
