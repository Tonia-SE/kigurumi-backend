import { Categories } from '../models/categories'
import { Cards } from '../models/cards'
//import { ICategory } from '../models/categories'

export function generateCategories(): void {
    //Categories.deleteMany({});
    const one = new Categories({
        title: 'YOUR KIGURUMI',
        color: 'adult',
    })
    one.save()
    const two = new Categories({
        title: 'KIDS KIGURUMI',
        color: 'kids',
    })
    two.save()
    const three = new Categories({
        title: 'SLIPPERS',
        color: 'slippers',
    })
    three.save()
}

export const cards = [
    {
        category: 'adults',
        imageUrl: '/static/images/adult/adult_1.jpg',
        title: 'Rainbow bear',
        amount: { S: 5, M: 3, L: 5, XL: 10 },
        price: 10.99,
    },
    {
        category: 'adults',
        imageUrl: '/static/images/adult/adult_2.jpg',
        title: 'Crocodile',
        amount: { S: 2, M: 0, L: 7, XL: 9 },
        price: 8.99,
    },
    {
        category: 'adults',
        imageUrl: '/static/images/adult/adult_3.jpg',
        title: 'Pink dinosaur',
        amount: { S: 8, M: 10, L: 8, XL: 10 },
        price: 9.99,
    },
    {
        category: 'adults',
        imageUrl: '/static/images/adult/adult_4.jpg',
        title: 'Tottoro',
        amount: { S: 1, M: 7, L: 10, XL: 8 },
        price: 10.99,
    },
    {
        category: 'adults',
        imageUrl: '/static/images/adult/adult_5.jpg',
        title: 'Blue elephant',
        amount: { S: 0, M: 6, L: 10, XL: 9 },
        price: 11.99,
    },
    {
        category: 'adults',
        imageUrl: '/static/images/adult/adult_6.jpg',
        title: 'Donkey',
        amount: { S: 3, M: 4, L: 9, XL: 10 },
        price: 8.99,
    },
    {
        category: 'adults',
        imageUrl: '/static/images/adult/adult_7.jpg',
        title: 'Blue unicorn',
        amount: { S: 0, M: 0, L: 6, XL: 8 },
        price: 7.99,
    },
    {
        category: 'adults',
        imageUrl: '/static/images/adult/adult_8.jpg',
        title: 'Kind monster',
        amount: { S: 1, M: 2, L: 8, XL: 10 },
        price: 9.99,
    },
    {
        category: 'adults',
        imageUrl: '/static/images/adult/adult_9.jpg',
        title: 'Violette unicorn',
        amount: { S: 2, M: 5, L: 7, XL: 7 },
        price: 10.99,
    },
    {
        category: 'kids',
        imageUrl: '/static/images/kids/kids_1.jpg',
        title: 'Pink unicorn',
        amount: { XS: 6, S: 5, M: 3, L: 5 },
        price: 10.99,
    },
    {
        category: 'kids',
        imageUrl: '/static/images/kids/kids_2.jpg',
        title: 'Rainbow bear',
        amount: { XS: 3, S: 2, M: 0, L: 7 },
        price: 8.99,
    },
    {
        category: 'kids',
        imageUrl: '/static/images/kids/kids_3.jpg',
        title: 'Kangaroo',
        amount: { XS: 2, S: 8, M: 10, L: 8 },
        price: 9.99,
    },
    {
        category: 'kids',
        imageUrl: '/static/images/kids/kids_4.jpg',
        title: 'Stich',
        amount: { XS: 7, S: 1, M: 7, L: 10 },
        price: 10.99,
    },
    {
        category: 'kids',
        imageUrl: '/static/images/kids/kids_5.jpg',
        title: 'Pikachu',
        amount: { XS: 5, S: 0, M: 6, L: 10 },
        price: 11.99,
    },
    {
        category: 'kids',
        imageUrl: '/static/images/kids/kids_6.jpg',
        title: 'Hello kitty',
        amount: { XS: 5, S: 3, M: 4, L: 9 },
        price: 8.99,
    },
    {
        category: 'kids',
        imageUrl: '/static/images/kids/kids_7.jpg',
        title: 'Blue unicorn',
        amount: { XS: 2, S: 0, M: 0, L: 6 },
        price: 7.99,
    },
    {
        category: 'kids',
        imageUrl: '/static/images/kids/kids_8.jpg',
        title: 'Opossum',
        amount: { XS: 1, S: 1, M: 2, L: 8 },
        price: 9.99,
    },
    {
        category: 'kids',
        imageUrl: '/static/images/kids/kids_9.jpg',
        title: 'Grey elephant',
        amount: { XS: 0, S: 2, M: 5, L: 7 },
        price: 10.99,
    },
    {
        category: 'slippers',
        imageUrl: '/static/images/slippers/slippers_1.jpg',
        title: 'Pink cute',
        amount: { '23-27': 6, '28-31': 5, '32-35': 3, '36-39': 5, '39-42': 3, '43-46': 1 },
        price: 2.99,
    },
    {
        category: 'slippers',
        imageUrl: '/static/images/slippers/slippers_2.jpg',
        title: 'Pikachu',
        amount: { '23-27': 6, '28-31': 5, '32-35': 3, '36-39': 5, '39-42': 3, '43-46': 1 },
        price: 3.19,
    },
    {
        category: 'slippers',
        imageUrl: '/static/images/slippers/slippers_3.jpg',
        title: 'Pink sharks',
        amount: { '23-27': 6, '28-31': 0, '32-35': 3, '36-39': 5, '39-42': 2, '43-46': 1 },
        price: 2.59,
    },
    {
        category: 'slippers',
        imageUrl: '/static/images/slippers/slippers_4.jpg',
        title: 'Pandas',
        amount: { '23-27': 0, '28-31': 5, '32-35': 3, '36-39': 5, '39-42': 3, '43-46': 5 },
        price: 2.79,
    },
    {
        category: 'slippers',
        imageUrl: '/static/images/slippers/slippers_5.jpg',
        title: 'Mice',
        amount: { '23-27': 6, '28-31': 3, '32-35': 3, '36-39': 0, '39-42': 3, '43-46': 1 },
        price: 3.29,
    },
    {
        category: 'slippers',
        imageUrl: '/static/images/slippers/slippers_6.jpg',
        title: 'Unicorns',
        amount: { '23-27': 0, '28-31': 5, '32-35': 3, '36-39': 5, '39-42': 3, '43-46': 1 },
        price: 3.09,
    },
    {
        category: 'slippers',
        imageUrl: '/static/images/slippers/slippers_7.jpg',
        title: 'Bears',
        amount: { '23-27': 6, '28-31': 5, '32-35': 0, '36-39': 5, '39-42': 3, '43-46': 1 },
        price: 2.99,
    },
    {
        category: 'slippers',
        imageUrl: '/static/images/slippers/slippers_8.jpg',
        title: 'Spiderman',
        amount: { '23-27': 6, '28-31': 0, '32-35': 3, '36-39': 5, '39-42': 3, '43-46': 1 },
        price: 3.99,
    },
    {
        category: 'slippers',
        imageUrl: '/static/images/slippers/slippers_9.jpg',
        title: 'Sharks',
        amount: { '23-27': 0, '28-31': 5, '32-35': 3, '36-39': 5, '39-42': 3, '43-46': 1 },
        price: 2.79,
    },
]

export function generateCards(): void {
    cards.map(element => {
        new Cards({
            category: element.category,
            imageUrl: element.imageUrl,
            title: element.title,
            amount: Object.entries(element.amount),
            price: element.price,
        }).save()
    })
}
