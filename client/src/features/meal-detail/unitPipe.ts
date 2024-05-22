export class UnitPipe {
  public abbreviate = (unit: string) => {
    switch (unit) {
      case 'pounds':
      case 'pound':
        return 'lb';
      case 'ounces':
      case 'ounce':
        return 'oz';
      case 'teaspoons':
      case 'teaspoon':
        return 'tsp';
      case 'tablespoons':
      case 'tablespoon':
        return 'tbsp';
      default:
        return unit;
    }
  };
}
