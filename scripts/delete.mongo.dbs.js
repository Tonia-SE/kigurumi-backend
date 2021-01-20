db = db.getSiblingDB('devdb')
db.categories.deleteMany({});
db.cards.deleteMany({});
db.cards.drop()
db.categories.drop()