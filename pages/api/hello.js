// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  if (req.method == 'GET') {
    res.json({ data: `${req.query['hello']}` });
  } else if (req.method == 'POST') {
    res.json({ type: 'POST' });
  } else {
    res.json({ type: `Unknown: ${req.method}` });
  }
};
