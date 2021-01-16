const errorHandler = (request, h) => {
  const { response } = request;
  console.log(response.isBoom);
  if (!response.isBoom) {
    console.log('insideIf', response.isBoom);
    return h.continue;
  }

  if (request.route.path === '/register' && request.route.method === 'post') {
    console.log(request.route.path, request.route.method);
    console.log(response.details);

    return h.view('register', { errors: response.details });
  }
  return h.continue;
};

module.exports = {
  errorHandler,
};
