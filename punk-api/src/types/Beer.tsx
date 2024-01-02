import { ChangeEventHandler, FormEventHandler } from "react";

export type Beer = {
  id: number;
  name: string;
  image_url: string;
  tagline: string;
};

export type SearchProps = {
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>;
};

export type FilterListProps = {
  searchTerm: SearchProps["searchTerm"];
  handleInput: SearchProps["handleInput"];
  getAbv: ChangeEventHandler<HTMLInputElement>;
  getYear: ChangeEventHandler<HTMLInputElement>;
  getAcid: ChangeEventHandler<HTMLInputElement>;
  getEbc: ChangeEventHandler<HTMLInputElement>;
};

export type BeerExt = {
  id: number;
  name: string;
  image_url: string;
  tagline: string;
  first_brewed: string;
  description: string;
  abv: number;
  ibu: number;
  ebc: number;
  srm: number;
  ph: number;
  food_pairing: string[];
  brewers_tips: string;
};

