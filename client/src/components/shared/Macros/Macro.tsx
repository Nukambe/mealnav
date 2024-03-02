import { titleCase } from '../../../app/utility';
import { Meal } from '../../../features/meals/mealTypes';

export default function Macro({
  macro,
  value,
}: {
  macro: string;
  value: number;
}) {
  return (
    <div className="sm:col-span-1">
      <dt className="text-sm font-medium text-gray-500">{titleCase(macro)}</dt>
      <dd className="mt-1 text-sm text-gray-900">{value}</dd>
    </div>
  );
}
