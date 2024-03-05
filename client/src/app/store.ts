import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice';
import mealsReducer from '../features/meals/mealsSlice';
import mealplanReducer from '../features/meal-plan/mealplanSlice';
import categoryReducer from '../features/categories/categorySlice';
import searchReducer from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    meals: mealsReducer,
    mealplan: mealplanReducer,
    category: categoryReducer,
    search: searchReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
