import { Meal, howToStep } from '../meals/mealTypes';

export default function MealDetailInstructions({ meal }: { meal: Meal }) {
  return (
    <section aria-labelledby="notes-title">
      <div className="bg-white shadow sm:overflow-hidden sm:rounded-lg">
        <div className="divide-y divide-gray-200">
          <div className="px-4 py-5 sm:px-6">
            <h2 id="notes-title" className="text-lg font-medium text-gray-900">
              Instructions
            </h2>
          </div>
          <div className="px-4 py-6 sm:px-6">
            <ol className="space-y-8">
              {meal.recipeInstructions.map((instruction, index) => (
                <li key={instruction.name}>
                  <Instruction instruction={instruction} index={index} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function Instruction({
  instruction,
  index,
}: {
  instruction: howToStep;
  index: number;
}) {
  return (
    <div className="text-base text-gray-500">
      <p className=" font-bold">
        {index + 1}. {instruction.name}
      </p>
      <p>{instruction.text}</p>
    </div>
  );
}
