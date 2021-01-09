const calcWeight = (thck, width, length) => {
  const density = 0.284; // ()lb/in3)
  if (thck <= 0 || width <= 0 || length <= 0) {
    return 0;
  }
  return density * thck * width * length * 0.454; // weight in
};

module.exports = {
  calcWeight,
};
