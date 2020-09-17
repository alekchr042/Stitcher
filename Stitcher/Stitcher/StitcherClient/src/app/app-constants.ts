import { environment } from "src/environments/environment";

export class Constants {
  public static readonly API_DOMAIN: string = environment.API_ADDRESS;
}

export class Controllers {
  public static readonly FLOSS: string = 'Floss';
}

export class Actions {
  public static readonly GET_ALL: string = 'GetAll';
}