import { createSelector } from "@reduxjs/toolkit";

const selectUSer = state => state.user;

export const selectCurrentUser = createSelector([selectUSer], (user) => user.currentUser);
