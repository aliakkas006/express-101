exports.homeController = (_req, res) => {
  // const error = new Error('Bad request');
  // error.status = 500;
  // throw error;

  const title = 'Home page';

  res.render('pages/home', { title });
};

exports.aboutController = (_req, res) => {
  const title = 'About Page';

  res.render('pages/about', { title });
};

exports.helpController = (_req, res) => {
  const title = 'Help Page';

  res.render('pages/help', { title });
};
