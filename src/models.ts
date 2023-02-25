export interface PetProps {
    id: number;
    name: string;
    weight_low_lbs: number;
    weight_high_lbs: number;
    image: string;
    temperaments: string[];
    life_span_low: number;
    life_span_high: number;
    description: string;
    type: string;
}

// name: str
// id: int
// weight_low_lbs: int
// weight_high_lbs: int
// temperaments: list[str]
// description: str
// image: str
// life_span_low: int
// life_span_high: int

// {
//     "weight": {"imperial": "6 - 13", "metric": "3 - 6"},
//     "height": {"imperial": "9 - 11.5", "metric": "23 - 29"},
//     "id": 1,
//     "name": "Affenpinscher",
//     "bred_for": "Small rodent hunting, lapdog",
//     "breed_group": "Toy",
//     "life_span": "10 - 12 years",
//     "temperament": ["Stubborn", "Curious", "Playful", "Adventurous", "Active", "Fun-loving"],
//     "origin": "Germany, France",
//     "reference_image_id": "BJa4kxc4X",
//     "image": {"id": "BJa4kxc4X", "width": 1600, "height": 1199,
//     "url": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"}
// }