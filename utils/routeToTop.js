const routeToTop = (router, ...args) => {
  if (typeof window !== 'undefined') window.scrollTo(0, 0);
  return router.push.apply(router, args);
};

export default routeToTop;
