//db.auth('root', 'rootpassword')

db = db.getSiblingDB('devdb')

db.createUser(
  {
      user: "devuser",
      pwd: "qwerty123",
      roles: [
          {
              role: "readWrite",
              db: "devdb"
          }
      ]
  }
);