export type Product={
    _id?:string
    name:string
    slug:string
    image:string
    banner?:string
    price:number
    brand:string
    description:string
    category:string
    rating:number
    countInStock:number
    numReviews:number
    colors?:[]
    size?:[]
}