exports.isAdmin = (req, res, next) => {
  const adminType = ['swAdmin', 'orgAdmin', 'propAdmin'];

  if (!adminType.includes(req.user.adminType)) return res.status(403).send('Access denied.');

  next();
};

exports.isOrgAdmin = (req, res, next) => {
  const orgAdmin = 'orgAdmin';

  if (req.user.adminType !== orgAdmin) return res.status(403).send('Access denied.');

  next();
};

exports.isSwAdmin = (req, res, next) => {
  const swAdmin = 'swAdmin';

  if (req.user.adminType !== swAdmin) return res.status(403).send('Access denied.');

  next();
};
