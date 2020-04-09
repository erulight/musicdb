import moment from 'moment'

export const prettyDate = (date) => {
  return moment(date).format('LL')
}

export const prettyYear = (date) => {
  return moment(date).format('YYYY')
}