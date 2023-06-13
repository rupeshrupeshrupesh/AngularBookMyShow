// import { RouterLink } from "@angular/router";

import { Movies } from "./Movies";

export class User{
    id:number
    name:string;
    email:string;
    mobile:string;
    pwd:string;
    role:Role;
    movies:Movies[];
}

export enum Role{
   USER ="USER",
   ADMIN="ADMIN",


}

