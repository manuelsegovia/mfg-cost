module.exports = {
  url: process.env.MONGO || 'mongodb://0.0.0.0:27017/manufactura',
  settings: {
    useUnifiedTopology: true,
    poolSize: 10,
  },
  decorate: true,
};
