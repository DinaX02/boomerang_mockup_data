import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://localhost:3000/',
    }),

    endpoints: (builder) => ({
        fetchProduct: builder.query({
            query: (productId) => `product/${productId}`, // Corrigido: URL deve ser uma string
        }),
        createProduct: builder.mutation({
            query: ({ title, description, value, price_day, availability, brand, sizeId, productTypeId, colorId, gradeId }) => ({
                url: 'product/',
                method: 'POST',
                body: { title, description, value, price_day, availability, brand, sizeId, productTypeId, colorId, gradeId },
            }),
        }),
        deleteProduct: builder.mutation({
            query: (productId) => ({
                url: `product/${productId}`, // Corrigido: URL deve ser uma string
                method: 'DELETE',
            }),
        }),
        updateProduct: builder.mutation({
            query: ({ productId, title, description, value, price_day, availability, brand, sizeId, productTypeId, colorId, gradeId }) => ({ // Adicionado productId
                url: `product/${productId}`, // Corrigido: URL deve ser uma string
                method: 'PUT',
                body: { title, description, value, price_day, availability, brand, sizeId, productTypeId, colorId, gradeId },
            }),
        }),
        fetchProductForm: builder.query({
            query: () => 'product/form', // Corrigido: URL deve ser uma string
        }),
    }),
});

export const { useFetchProductQuery, useCreateProductMutation, useDeleteProductMutation, useUpdateProductMutation, useFetchProductFormQuery } = myAPI;

export default myAPI;
