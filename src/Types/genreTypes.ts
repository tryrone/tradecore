export interface GenreObj {
  id: number;
  name: string;
  subgenres: SubGenre[];
};

export interface SubGenre {
  id: number;
  name: string;
  isDescriptionRequired:boolean;
}