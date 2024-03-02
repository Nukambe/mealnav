export function getMacroUnit(macro: string) {
  switch (macro) {
    case 'calories':
      return 'kcal';
    case 'carbs':
    case 'protein':
    case 'fat':
    case 'sugar':
    case 'fiber':
      return 'g';
    case 'sodium':
    case 'cholesterol':
      return 'mg';
    default:
      return '';
  }
}
