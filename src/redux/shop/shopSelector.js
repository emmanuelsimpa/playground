import { createSelector } from "@reduxjs/toolkit";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector([selectShop], (shop) => shop.collections)

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collection => collection ? Object.keys(collection).map(key=>collection[key]) : []
)

export const selectShopItem = collectionUrlParams => createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionUrlParams] : null
)

export const selectIsCollectionFetching = createSelector([selectShop], (shop) => shop.isFetching)

export const selectIsCollectionLoading = createSelector([selectShop], (shop) => !!shop.collections)