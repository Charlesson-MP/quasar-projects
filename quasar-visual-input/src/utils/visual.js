import { colors } from 'quasar'
const { getBrand } = colors

const input = {
  color: getBrand('primary'),
  rounded: true,
  filled: true,
  'stack-label': true
}

export {
  input
}
