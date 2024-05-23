export function cleanUpSpecialChars(str) {
  return str
    .replace(/[ÀÁÂÃÄÅ]/g, "A")
    .replace(/[àáâãäå]/g, "a")
    .replace(/[ÈÉÊË]/g, "E")
    .replace(/[é]/g, "e")
    .replace(/[ÍÍÍ]/g, "I")
    .replace(/[í]/g, "i")
    .replace(/[ÓÓÓ]/g, "O")
    .replace(/[ó]/g, "o")
    .replace(/[Ú]/g, "U")
    .replace(/[ú]/g, "u")
    //.... all the rest
    .replace(/[^a-z0-9]/gi, ''); // final clean up
}