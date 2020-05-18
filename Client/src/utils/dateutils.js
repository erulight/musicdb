import moment from 'moment'

/**
 * Returns the date in an easy to read format (MMMM DD, YYYY)
 * @param {Date} date The date to be formatted
 */
export const prettyDate = (date) => {
  return moment(date).format('LL')
}

/**
 * Returns just the Year of the date (YYYY)
 * @param {Date} date The date to be formatted
 */
export const prettyYear = (date) => {
  return moment(date).format('YYYY')
}

/**
 * Returns the date in an input compliant format (YYYY-MM-DD)
 * @param {Date} date The date to be formatted
 */
export const inputDate = (date) => {
  return moment(date).format('YYYY-MM-DD')
}