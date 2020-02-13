import moment from 'moment'

export const prettyDate = (date) => {
  return moment(date).format('MMMM Do, YYYY')
}

export const prettyYear = (date) => {
  return moment(date).format('YYYY')
}