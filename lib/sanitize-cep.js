module.exports = function (cep) {
  if (typeof(cep) === 'number') {
      if (isInteger(cep)) {
        cep = cep.toString()
        if (isLengthOk(cep)) return cep
      }
  } else if (typeof(cep) === 'string') {
      cep = removeDashIfAny(cep)
      if (isDigitOnly(cep) && isLengthOk(cep)) return cep
  }
  return null
}

function isDigitOnly (cep) {
  return /^[0-9]+$/.test(cep)
}

// ECMAScript 6 implementation draft
// (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
function isInteger (nVal) {
   return typeof nVal === 'number'
     && isFinite(nVal)
     && nVal > -9007199254740992
     && nVal < 9007199254740992
     && Math.floor(nVal) === nVal
}

function isLengthOk (cep) {
  return cep.length === 8
}

function removeDashIfAny (cep) {
  if (cep && cep[5] === '-' && cep.length === 9) return cep.slice(0, 5) + cep.slice(6)
  else return cep
}

