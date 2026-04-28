const basicAuth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
  
 
    if (!authHeader || !authHeader.startsWith('Basic ')) {
      res.set('WWW-Authenticate', 'Basic realm="Cafeteria API"');
      return res.status(401).json({ error: 'Autenticação necessária.' });
    }
  
    
    const base64Credentials = authHeader.split(' ')[1];
    const decoded = Buffer.from(base64Credentials, 'base64').toString('utf-8');
    const [username, password] = decoded.split(':');
  
   
    const validUser = process.env.AUTH_USER;
    const validPass = process.env.AUTH_PASS;
  
    if (username === validUser && password === validPass) {
      return next();
    }
  
  
    res.set('WWW-Authenticate', 'Basic realm="Cafeteria API"');
    return res.status(401).json({ error: 'Usuário ou senha inválidos.' });
  };
  
  module.exports = basicAuth;