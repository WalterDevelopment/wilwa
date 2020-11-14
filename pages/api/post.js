export default (req, res) => {
  res.statusCode = 501;
  res.json({ status: 'Not Implemented.' });
};
