export interface Poster {
  idAffiche:number;
  titre: string;
  sujet: string;
  description: string;
  image:File|null;
  couverture:File|null;
  localisationAffiche: number;
  prix: number;
  existant: Boolean;
  lien: string;
}
