module.exports = (thck, partW, partL, rawWidth, rawLength) => {
  const esqueleto = 1;
  const evaporacion = {
    0.25: 0.125,
    0.375: 0.125,
    0.5: 0.125,
    0.75: 0.25,
    1: 0.25,
    1.25: 0.25,
    1.5: 0.25,
  };
  const areaPart =
    2 * esqueleto +
    2 * evaporacion[thck] +
    partW * (2 * esqueleto + 2 * evaporacion[thck]) +
    partL;
  const areaRaw = rawWidth * rawLength;
  console.log('partes', partW, partL);
  console.log('AREA PART', areaPart);
  return 1 / Math.floor(areaRaw / areaPart);
};
