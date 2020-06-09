/* eslint-disable */
function imgLoaded (url) {
  if (!url) {
    return undefined
  }
  return new Promise(function (resolve, reject) {
    if (url.slice(0, 4) == 'data') {
      const img = new Image()
      img.onload = function () {
        resolve(img)
      }
      img.onerror = function () {
        reject('Image load error')
      }
      img.src = url
      return
    }
    const img = new Image()
    img.setAttribute('crossOrigin', 'Anonymous')
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function () {
      reject('Image load error')
    }
    img.src = url
  })
}
export default imgLoaded
