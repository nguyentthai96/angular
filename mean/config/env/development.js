module.exports = {
  db: 'mongodb://localhost:27017/mean-book',
  sessionSecret: 'developmentSessionSecret',
  facebook: {
    clientID: '1514005575579282',
    clientSecret: '54e0b7961b11d71fde0721545457b205',
    callbackURL: 'http://localhost:3000/oauth/facebook/callback'
  },
  twitter: {
    clientID: 'Application Id',
    clientSecret: 'Application Secret',
    callbackURL: 'http://localhost:3000/oauth/twitter/callback'
  },
  google: {
    clientID: '821243166119-eiihpkg4nvqrhkmqpknfrq4bgnp3v665.apps.googleusercontent.com',
    clientSecret: 'a3rbutV4syl8uoF7y8fVUXhD',
    callbackURL: 'http://localhost:3000/oauth/google/callback'
  }
};