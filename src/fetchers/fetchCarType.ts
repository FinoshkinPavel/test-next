export type FetchCarResponseType = {
    openCar: OpenCarType
    card: CardType
}

export type OpenCarType = {
    id: number
    cargrade_set: Array<CarGradeType>
    carphotogallery_set: Array<CarPhotoGalleryType> 
    brand_name: string
    comments_count: number
    name: string
    body_style: string
    car_type: string
    official_site_url: string
    basic_warranty_years: number
    basic_warranty_kms: string
    ancap_rate: number
    adult_pass: number
    child_pass: number
    pedestrian: number
    safety_assist: number
    ancap_link: string
    comment: string
    ready: boolean
    created_at: string
    updated_at: string
    order: any
    brand: number
    created_by: number
}

export type CardType = {
        id: number
        brand: string
        name: string
        price_min: number
        rating_avg: number
        gallery_set: string
        comments_count: number
}

export type CarPhotoGalleryType = {
    id: number
    image: string
    is_first: boolean
    model: number
}
export type CarGradeType = {
    grade: string
    seats: number
    price: number
  } 
