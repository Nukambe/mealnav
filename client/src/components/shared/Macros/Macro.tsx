import { getMacroUnit, titleCase } from '../../../app/utility';

export default function Macro({
  macro,
  value,
}: {
  macro: string;
  value: number;
}) {
  return (
    <div className="sm:col-span-1">
      <dt className="text-lg font-bold text-gray-500">{titleCase(macro)}</dt>
      <dd className="mt-1 text-xl font-semibold text-gray-900">
        {value}{' '}
        <span className="text-base font-normal">{getMacroUnit(macro)}</span>
      </dd>
    </div>
  );
}
