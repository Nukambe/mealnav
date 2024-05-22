import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getAllMeals, LoadingStatus } from '../meals/mealsSlice';
import { FilterOptions, SortOptions } from './searchTypes';

export type SearchState = {
  sortOptions: SortOptions;
  filters: FilterOptions;
  active: string[];
  limit: number;
  page: number;
  status: LoadingStatus;
  name: string;
};

export const initialState: SearchState = {
  name: '',
  sortOptions: {
    mostPopular: { current: true, order: 'DESC' },
    bestRating: { current: false, order: 'DESC' },
    newest: { current: false, order: 'DESC' },
    calories: { current: false, order: 'ASC' },
    fat: { current: false, order: 'ASC' },
    protein: { current: false, order: 'ASC' },
    carbs: { current: false, order: 'ASC' },
  },
  filters: {
    prepTime: { min: 0, max: 0 },
    cookTime: { min: 0, max: 0 },
    cookingMethod: {
      options: [
        'Steaming',
        'Roasting',
        'Boiling',
        'Frying',
        'Poaching',
        'Simmering',
        'Braising',
        'Broiling',
        'Baking',
        'Sauteing',
        'Grilling',
        'Stir-frying',
        'Microwaving',
        'Pressure cooking',
        'Slow cooking',
        'Smoking',
        'Searing',
      ],
      selected: [],
    },
    recipeCategory: {
      options: [
        'Breakfast',
        'Lunch',
        'Dinner',
        'Snack',
        'Appetizer',
        'Dessert',
        'Side',
        'Main Course',
        'Drink',
      ],
      selected: [],
    },
    recipeCuisine: {
      options: [
        'African',
        'American',
        'British',
        'Cajun',
        'Caribbean',
        'Chinese',
        'Eastern European',
        'European',
        'French',
        'German',
      ],
      selected: [],
    },
    suitableForDiet: {
      options: [
        'Diabetic',
        'Halal',
        'Vegan',
        'Vegetarian',
        'Pescaetarian',
        'Kosher',
        'Keto',
      ],
      selected: [],
    },
    recipeIngredient: { options: [], selected: [] },
    calories: { min: 0, max: 0 },
    fat: { min: 0, max: 0 },
    protein: { min: 0, max: 0 },
    carbs: { min: 0, max: 0 },
    sugar: { min: 0, max: 0 },
    fiber: { min: 0, max: 0 },
    cholesterol: { min: 0, max: 0 },
    sodium: { min: 0, max: 0 },
  },
  limit: 10,
  page: 1,
  active: [],
  status: LoadingStatus.loading,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,

  reducers: {
    setSortOption: (
      state,
      action: PayloadAction<{ sort: keyof SortOptions }>,
    ) => {
      if (state.sortOptions[action.payload.sort].current) {
        const isAscending =
          state.sortOptions[action.payload.sort].order === 'ASC';
        state.sortOptions[action.payload.sort].order = isAscending
          ? 'DESC'
          : 'ASC';
      } else {
        for (const key in state.sortOptions) {
          state.sortOptions[key as keyof SortOptions].current = false;
        }
        state.sortOptions[action.payload.sort].current = true;
      }
    },
    setActiveFilter: (
      state,
      action: PayloadAction<{ filter: keyof FilterOptions; checked: boolean }>,
    ) => {
      if (action.payload.checked) {
        // If the filter is checked, add it to the active list
        state.active.push(action.payload.filter);
      } else {
        // If the filter is unchecked, remove it from the active list
        state.active = state.active.filter(
          (filter) => filter !== action.payload.filter,
        );
      }
    },
    setFilterMinMax: (
      state: any,
      action: PayloadAction<{
        filter: keyof FilterOptions;
        minMax: 'min' | 'max';
        value: number;
      }>,
    ) => {
      if (
        // If the value is not 0, add the filter to the active list
        action.payload.value > 0
      ) {
        // If the filter is not already in the active list, add it
        if (!state.active.includes(action.payload.filter))
          state.active.push(action.payload.filter);
      }
      state.filters[action.payload.filter][action.payload.minMax] =
        action.payload.value;
      if (
        // If the min and max values are 0, remove the filter from the active list
        state.filters[action.payload.filter].min === 0 &&
        state.filters[action.payload.filter].max === 0
      ) {
        // If the filter is in the active list, remove it
        state.active = state.active.filter(
          (filter: string) => filter !== action.payload.filter,
        );
      }
    },
    setFilterOption: (
      state: any,
      action: PayloadAction<{
        filter: keyof FilterOptions;
        option: string;
      }>,
    ) => {
      if (
        // Check if the option is already selected
        state.filters[action.payload.filter].selected.includes(
          action.payload.option,
        )
      ) {
        // If the option is already selected, remove it
        state.filters[action.payload.filter].selected = state.filters[
          action.payload.filter
        ].selected.filter((option: string) => option !== action.payload.option);
      } else {
        // If the option is not selected, add it
        state.filters[action.payload.filter].selected.push(
          action.payload.option,
        );
      }
      if (
        // If there are no selected options, remove the filter from the active list
        state.filters[action.payload.filter].selected.length === 0
      ) {
        // If the filter is in the active list, remove it
        state.active = state.active.filter(
          (filter: string) => filter !== action.payload.filter,
        );
      } else if (
        // If the filter is not in the active list, add it
        !state.active.includes(action.payload.filter)
      ) {
        state.active.push(action.payload.filter);
      }
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(getAllMeals.pending, (state) => {
        state.status = LoadingStatus.loading;
      })
      .addCase(getAllMeals.fulfilled, (state) => {
        state.status = LoadingStatus.success;
      })
      .addCase(getAllMeals.rejected, (state) => {
        state.status = LoadingStatus.failed;
      });
  },
});

export const {
  setSortOption,
  setActiveFilter,
  setFilterMinMax,
  setFilterOption,
  setLimit,
  setPage,
  setName,
} = searchSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSortOptions = (state: RootState) => state.search.sortOptions;
export const selectFilterOptions = (state: RootState) => state.search.filters;
export const selectActiveFilters = (state: RootState) => state.search.active;
export const selectLimit = (state: RootState) => state.search.limit;
export const selectPage = (state: RootState) => state.search.page;
export const selectSearchStatus = (state: RootState) => state.search.status;
export const selectName = (state: RootState) => state.search.name;

export default searchSlice.reducer;
