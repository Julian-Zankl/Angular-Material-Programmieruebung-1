import { Kindergarden } from "./Kindergarden";

export interface Child {
    id: string;
    name: string;
    birthDate: string;
    kindergardenId: number;
    anmeldung: Date;
  }

  export interface ChildResponse {
    id: string;
    name: string;
    birthDate: string;
    kindergarden: Kindergarden;
    kindergardenId: number;
    anmeldung: Date;
  }
