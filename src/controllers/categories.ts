import { Categories } from '../models/categories'
//import { ICategory } from '../models/categories'

export function generateCategories(): void {
    //Categories.deleteMany({});
    const one = new Categories({
        title: 'YOUR KIGURUMI',
        color: 'adult'
    })
    one.save()
    const two = new Categories({
        title: 'KIDS KIGURUMI',
        color: 'kids'
    })
    two.save()
    const three = new Categories({
        title: 'SLIPPERS',
        color: 'slippers'
    })
    three.save()
    //   console.log(one)
    //   console.log(two)
    //   console.log(three)
}
