const checkTokenExpirationMiddleware = (store) => (next) => (action) => {
  const token = JSON.parse(localStorage.getItem('tokenLimits'));
  const tokenDate = Date.parse(token);
  const dateNow = (Date.now() / 1000);
  if (tokenDate < dateNow) {
    localStorage.clear();
  }
  next(action);
};

export default checkTokenExpirationMiddleware;
