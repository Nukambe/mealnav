import { getAllCategories } from '../features/categories/categorySlice';
import CategorySection from '../features/categories/CategorySection';
import DietSection from '../features/categories/DietSection';

export const loader = (dispatch: any) => async () =>
  await dispatch(getAllCategories());

export default function MealsPage() {
  return (
    <>
      <CategorySection />
      <DietSection />
    </>
  );
}
