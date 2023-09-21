import { FetchCarResponseType } from "./fetchCarType";

export const baseUrl = 'https://ozcars-backend.tds.media'

export type FetchBrandResponseType = {
    name: string,
    model_count: number,
    order: null
}
export const fetchBrands = async (): Promise<FetchBrandResponseType[]> => {
      const res = await fetch(`${baseUrl}/au/arabalar_brands`);
      if(!res.ok) console.log("fetchBrands Error!!!")
      return res.json();
  };

  export type fetchCarsByBrandResponseType = {
    filteredData:BrandCarType[] 
  }

  export type BrandCarType = {
    id: number
    brand: string
    name: string
    price_min: number
    rating_avg: number
    gallery_set: string
    comments_count: number
  }

  export const fetchCarsByBrand = async (brand?: string  ): Promise<fetchCarsByBrandResponseType> => {
    const res = await fetch(`${baseUrl}/au/araba/${brand}`);
    if(!res.ok) console.log('fetchCarsByBrand Error!!!!')
    return res.json();
  };

  export const fetchAllCars = async (): Promise<fetchCarsByBrandResponseType> => {
      const res = await fetch(`${baseUrl}/au/araba/?start=0&end=1200`);
      if(!res.ok)console.log('fetchAllCars Error!!!!!!!');
      return res.json();
  };

  export const fetchCarsByModel = async (brand: string, model: string  ): Promise<FetchCarResponseType> => {
    const res = await fetch(`${baseUrl}/au/araba/${brand}/${model}`);
    if(!res.ok) console.log('fetchCarsByBrand Error!!!!')
    return res.json();
  };

  export const fetchCarByTypeMeta = async (brand: string, model: string, type: number): Promise<any> => {
      const res = await fetch(`${baseUrl}/${location}/araba/${brand}/${model}/modeller/${type}/meta`);
      if(!res.ok) console.log('fetchCarByTypeMeta Error!!!!!!')
      return res.json();
  };