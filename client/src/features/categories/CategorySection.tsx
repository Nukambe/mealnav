import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import { Category } from './categoryTypes';
import { useAppSelector } from '../../app/hooks';
import { selectCategories } from './categorySlice';

export default function CategorySection() {
  const categories = useAppSelector(selectCategories);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <SectionTitle title="Categories" />
        <p className="mt-4 text-base text-gray-500">
          Each season, we collaborate with world-class designers to create a
          collection inspired by the natural world.
        </p>

        <ul className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {categories
            ?.filter((category) => category.id < 4)
            .map((category) => (
              <li key={category.id}>
                <CategoryCard category={category} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      key={category.name}
      to={`/app/search?${new URLSearchParams({ categories: category.name })}`}
      className="group block"
    >
      <div
        aria-hidden="true"
        className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
      >
        <img
          src="https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg"
          alt={category.imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h3 className="mt-4 text-base font-semibold text-gray-900">
        {category.name}
      </h3>
      <p className="mt-2 text-sm text-gray-500">{category.description}</p>
    </Link>
  );
}
