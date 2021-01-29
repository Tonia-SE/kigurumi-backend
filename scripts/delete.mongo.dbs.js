db = db.getSiblingDB('devdb')
db.categories.deleteMany({});
db.cards.deleteMany({});
db.orders.deleteMany({});
db.wishes.deleteMany({});
db.users.deleteMany({});
db.users.drop()
db.cards.drop()
db.orders.drop()
db.wishes.drop()
db.categories.drop()