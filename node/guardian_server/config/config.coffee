path = require 'path'
rootPath = path.normalize(__dirname + '/..')

module.exports =
  development:
    db: "mongodb://localhost/guardian_dev"
    root: rootPath
    port: 3000
  production:
    db: "mongodb://localhost/guardian_prod"
    root: rootPath
    port: 8080
  test:
    db: "mongodb://localhost/guardian_test"
    root: rootPath
    port: 1234
