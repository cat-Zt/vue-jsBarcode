/* eslint-disable */
export function toBoolean (val) {
  if (val === '') return val
  return val === 'true' || val == '1'
}
