import crypto from 'crypto'


const alg = 'aes-256-ctr'
const pwd = 'abcdabcdefgh'

function crypt(text) {
  const cipher = crypto.createCipher(alg, pwd)
  const crypted = cipher.update(text, 'utf8', 'hex')
  return crypted
}
function decrypt(text) {
  const decipher = crypto.createDecipher(alg, pwd)
  const plain = decipher.update(text, 'hex', 'utf8')
  return plain
}

export const cryptoServices = {
  crypt,
  decrypt
}