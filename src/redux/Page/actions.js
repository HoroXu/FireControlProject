import * as type from './action-type'

export const queryMc = (value) => {
  return {
    type: type.SET_MC,
    mc: value
  }
}

