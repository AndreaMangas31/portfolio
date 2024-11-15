export interface Crew {
  id: number;
  name: string;
  description: string;
  status: string;
  number: string;
  roman_name: string;
  total_prime: string;
  is_yonko: string;
}

export interface Fruit {
  id: number;
  name: string;
  description: string;
  type: string;
  filename: string;
  roman_name: string;
  technicalFile: string;
}

export interface Character {
  id: number;
  name: string;
  job: string;
  size: string;
  birthday: string;
  age: string;
  bounty: string;
  status: string;
  crew: Crew;
  fruit: Fruit;
}
