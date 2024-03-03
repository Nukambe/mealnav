import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Diet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image: string;
}

const diets = [
  {
    id: 1,
    name: 'Paleo',
    description:
      'The paleo diet is designed to resemble what human hunter-gatherer ancestors ate thousands of years ago. Although it’s impossible to know exactly what human ancestors ate in different parts of the world, researchers believe their diets consisted of whole foods.',
    image:
      'https://www.healthline.com/hlcmsresource/images/AN_images/paleo-diet-guide-1296x728-feature.jpg',
  },
  {
    id: 2,
    name: 'Keto',
    description:
      'The ketogenic diet is a very low-carb, high-fat diet that shares many similarities with the Atkins and low-carb diets. It involves drastically reducing carbohydrate intake and replacing it with fat. This reduction in carbs puts your body into a metabolic state called ketosis.',
    image:
      'https://www.healthline.com/hlcmsresource/images/AN_images/ketogenic-diet-guide-1296x728-feature.jpg',
  },
  {
    id: 3,
    name: 'Mediterranean',
    description:
      'The Mediterranean diet is based on the traditional foods that people used to eat in countries like Italy and Greece back in 1960. Researchers noted that these people were exceptionally healthy compared to Americans and had a low risk of many lifestyle diseases.',
    image:
      'https://www.healthline.com/hlcmsresource/images/AN_images/mediterranean-diet-guide-1296x728-feature.jpg',
  },
  {
    id: 4,
    name: 'Vegan',
    description:
      'A vegan diet can help you lose weight and drastically improve your health, if done right. Here is a detailed beginner’s guide to going vegan. A vegan diet can help you lose weight and drastically improve your health, if done right.',
    image:
      'https://www.healthline.com/hlcmsresource/images/AN_images/vegan-diet-guide-1296x728-feature.jpg',
  },
  {
    id: 5,
    name: 'Vegetarian',
    description:
      'A vegetarian diet involves abstaining from eating meat, fish and poultry. People often adopt a vegetarian diet for religious or personal reasons, as well as ethical issues, such as animal rights. Others decide to become vegetarian for environmental reasons, as livestock production increases greenhouse gases and contributes to climate change.',
    image:
      'https://www.healthline.com/hlcmsresource/images/AN_images/vegetarian-diet-guide-1296x728-feature.jpg',
  },
];
