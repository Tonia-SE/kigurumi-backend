import { Categories } from '../models/categories'
import { Cards } from '../models/cards'
//import { ICategory } from '../models/categories'

export function generateCategories(): void {
    //Categories.deleteMany({});
    const one = new Categories({
        titleEng: 'YOUR KIGURUMI',
        titleRu: 'ВАШ КИГУРУМИ',
        color: 'adult',
    })
    one.save()
    const two = new Categories({
        titleEng: 'KIDS KIGURUMI',
        titleRu: 'ДЕТСКИЙ КИГУРУМИ',
        color: 'kids',
    })
    two.save()
    const three = new Categories({
        titleEng: 'SLIPPERS',
        titleRu: 'ТАПОЧКИ',
        color: 'slippers',
    })
    three.save()
}

export const cards = [
    {
        category: 'adults',
        imageUrl: '/static/images/adult/adult_1.jpg',
        titleEng: 'Rainbow bear',
        titleRu: 'Разноцветный медведь',
        amount: { S: 5, M: 3, L: 5, XL: 10 },
        price: 10.99,
    },
    {
        category: 'adults',
        imageUrl: '/static/images/adult/adult_2.jpg',
        titleEng: 'Crocodile',
        titleRu: 'Крокодил',
        amount: { S: 2, M: 0, L: 7, XL: 9 },
        price: 8.99,
    },
    {
        category: 'adults',
        imageUrl: '/static/images/adult/adult_3.jpg',
        titleEng: 'Pink dinosaur',
        titleRu: 'Розовый динозавр',
        amount: { S: 8, M: 10, L: 8, XL: 10 },
        price: 9.99,
    },
    {
        category: 'adults',
        imageUrl: '/static/images/adult/adult_4.jpg',
        titleEng: 'Tottoro',
        titleRu: 'Тотторо',
        amount: { S: 1, M: 7, L: 10, XL: 8 },
        price: 10.99,
    },
    {
        category: 'adults',
        imageUrl: '/static/images/adult/adult_5.jpg',
        titleEng: 'Blue elephant',
        titleRu: 'Голубой слон',
        amount: { S: 0, M: 6, L: 10, XL: 9 },
        price: 11.99,
    },
    {
        category: 'adults',
        imageUrl: '/static/images/adult/adult_6.jpg',
        titleEng: 'Donkey',
        titleRu: 'Ослик',
        amount: { S: 3, M: 4, L: 9, XL: 10 },
        price: 8.99,
    },
    {
        category: 'adults',
        imageUrl: '/static/images/adult/adult_7.jpg',
        titleEng: 'Blue unicorn',
        titleRu: 'Голубой единорог',
        amount: { S: 0, M: 0, L: 6, XL: 8 },
        price: 7.99,
    },
    {
        category: 'adults',
        imageUrl: '/static/images/adult/adult_8.jpg',
        titleEng: 'Kind monster',
        titleRu: 'Добрый монстр',
        amount: { S: 1, M: 2, L: 8, XL: 10 },
        price: 9.99,
    },
    {
        category: 'adults',
        imageUrl: '/static/images/adult/adult_9.jpg',
        titleEng: 'Violette unicorn',
        titleRu: 'Сиреневый единорог',
        amount: { S: 2, M: 5, L: 7, XL: 7 },
        price: 10.99,
    },
    {
        category: 'kids',
        imageUrl: '/static/images/kids/kids_1.jpg',
        titleEng: 'Pink unicorn',
        titleRu: 'Розовый единорог',
        amount: { XS: 6, S: 5, M: 3, L: 5 },
        price: 10.99,
    },
    {
        category: 'kids',
        imageUrl: '/static/images/kids/kids_2.jpg',
        titleEng: 'Rainbow bear',
        titleRu: 'Разноцветный мишка',
        amount: { XS: 3, S: 2, M: 0, L: 7 },
        price: 8.99,
    },
    {
        category: 'kids',
        imageUrl: '/static/images/kids/kids_3.jpg',
        titleEng: 'Kangaroo',
        titleRu: 'Кенгуру',
        amount: { XS: 2, S: 8, M: 10, L: 8 },
        price: 9.99,
    },
    {
        category: 'kids',
        imageUrl: '/static/images/kids/kids_4.jpg',
        titleEng: 'Stich',
        titleRu: 'Стич',
        amount: { XS: 7, S: 1, M: 7, L: 10 },
        price: 10.99,
    },
    {
        category: 'kids',
        imageUrl: '/static/images/kids/kids_5.jpg',
        titleEng: 'Pikachu',
        titleRu: 'Пикачу',
        amount: { XS: 5, S: 0, M: 6, L: 10 },
        price: 11.99,
    },
    {
        category: 'kids',
        imageUrl: '/static/images/kids/kids_6.jpg',
        titleEng: 'Hello kitty',
        titleRu: 'Хэлло китти',
        amount: { XS: 5, S: 3, M: 4, L: 9 },
        price: 8.99,
    },
    {
        category: 'kids',
        imageUrl: '/static/images/kids/kids_7.jpg',
        titleEng: 'Blue unicorn',
        titleRu: 'Синий единорог',
        amount: { XS: 2, S: 0, M: 0, L: 6 },
        price: 7.99,
    },
    {
        category: 'kids',
        imageUrl: '/static/images/kids/kids_8.jpg',
        titleEng: 'Opossum',
        titleRu: 'Опоссум',
        amount: { XS: 1, S: 1, M: 2, L: 8 },
        price: 9.99,
    },
    {
        category: 'kids',
        imageUrl: '/static/images/kids/kids_9.jpg',
        titleEng: 'Grey elephant',
        titleRu: 'Серый слон',
        amount: { XS: 0, S: 2, M: 5, L: 7 },
        price: 10.99,
    },
    {
        category: 'slippers',
        imageUrl: '/static/images/slippers/slippers_1.jpg',
        titleEng: 'Pink cute',
        titleRu: 'Розовые в горох',
        amount: { '23-27': 6, '28-31': 5, '32-35': 3, '36-39': 5, '39-42': 3, '43-46': 1 },
        price: 2.99,
    },
    {
        category: 'slippers',
        imageUrl: '/static/images/slippers/slippers_2.jpg',
        titleEng: 'Pikachu',
        titleRu: 'Пикачу',
        amount: { '23-27': 6, '28-31': 5, '32-35': 3, '36-39': 5, '39-42': 3, '43-46': 1 },
        price: 3.19,
    },
    {
        category: 'slippers',
        imageUrl: '/static/images/slippers/slippers_3.jpg',
        titleEng: 'Pink sharks',
        titleRu: 'Розовые акулы',
        amount: { '23-27': 6, '28-31': 0, '32-35': 3, '36-39': 5, '39-42': 2, '43-46': 1 },
        price: 2.59,
    },
    {
        category: 'slippers',
        imageUrl: '/static/images/slippers/slippers_4.jpg',
        titleEng: 'Pandas',
        titleRu: 'Панды',
        amount: { '23-27': 0, '28-31': 5, '32-35': 3, '36-39': 5, '39-42': 3, '43-46': 5 },
        price: 2.79,
    },
    {
        category: 'slippers',
        imageUrl: '/static/images/slippers/slippers_5.jpg',
        titleEng: 'Mice',
        titleRu: 'Мышки',
        amount: { '23-27': 6, '28-31': 3, '32-35': 3, '36-39': 0, '39-42': 3, '43-46': 1 },
        price: 3.29,
    },
    {
        category: 'slippers',
        imageUrl: '/static/images/slippers/slippers_6.jpg',
        titleEng: 'Unicorns',
        titleRu: 'Единороги',
        amount: { '23-27': 0, '28-31': 5, '32-35': 3, '36-39': 5, '39-42': 3, '43-46': 1 },
        price: 3.09,
    },
    {
        category: 'slippers',
        imageUrl: '/static/images/slippers/slippers_7.jpg',
        titleEng: 'Bears',
        titleRu: 'Медведи',
        amount: { '23-27': 6, '28-31': 5, '32-35': 0, '36-39': 5, '39-42': 3, '43-46': 1 },
        price: 2.99,
    },
    {
        category: 'slippers',
        imageUrl: '/static/images/slippers/slippers_8.jpg',
        titleEng: 'Spiderman',
        titleRu: 'Спайдермен',
        amount: { '23-27': 6, '28-31': 0, '32-35': 3, '36-39': 5, '39-42': 3, '43-46': 1 },
        price: 3.99,
    },
    {
        category: 'slippers',
        imageUrl: '/static/images/slippers/slippers_9.jpg',
        titleEng: 'Sharks',
        titleRu: 'Акулы',
        amount: { '23-27': 0, '28-31': 5, '32-35': 3, '36-39': 5, '39-42': 3, '43-46': 1 },
        price: 2.79,
    },
]

export function generateCards(): void {
    cards.map(element => {
        new Cards({
            category: element.category,
            imageUrl: element.imageUrl,
            titleEng: element.titleEng,
            titleRu: element.titleRu,
            amount: Object.entries(element.amount),
            price: element.price,
        }).save()
    })
}
