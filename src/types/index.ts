export default interface iProduct {
  quantity?: number;
  id: 'string',
  brand: string,
  camera: boolean,
  colors: string[],
  description: string,
  discountPercentage: number,
  images: string[],
  price: number,
  rating: number,
  size: string,
  smartphoneControl: boolean,
  stock: number,
  title: string,
  year: string,
}