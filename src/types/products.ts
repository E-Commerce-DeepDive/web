export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
  categoryName: string;
  stockQuantity: number;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  shippingOption: string;
  imageUrls: string[];
  averageRating: number;
  reviewCount: number;
}
