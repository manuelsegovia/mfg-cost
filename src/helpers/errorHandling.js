const errorHandler = (request, h) => {
  const { response } = request;
  console.log(response.isBoom);
  if (!response.isBoom) {
    console.log('insideIf', response.isBoom);
    return h.continue;
  }

  if (request.route.path === '/register' && request.route.method === 'post') {
    return h.view('login', { errors: response.details });
  }
  if (request.route.path === '/login' && request.route.method === 'post') {
    return h.view('login', { errors: response.details });
  }
  return h.continue;
};

module.exports = {
  errorHandler,
};
