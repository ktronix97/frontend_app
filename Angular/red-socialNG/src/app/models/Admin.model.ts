export class AdminModel{
    id_admin?:String;
    PrimerNombre:String;
    segundoNombre:String;
    primerApellido:String;
    segundoApellido:String;
    cargo:String;
    empresa:String;
    correo:String;
    contraseña:String;
    celular:String;
    rol:number;   
    isLogged:boolean=false;
    token?:String;
}