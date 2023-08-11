import moment from 'moment';

export default function formatDatetime(date, format) {
  return (
    moment(date).format(format)
  )
}
