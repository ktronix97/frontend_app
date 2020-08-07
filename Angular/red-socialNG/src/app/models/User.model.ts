export class UserModel{
    id?:String;
    PrimerNombre:String;
    segundoNombre:String;
    primerApellido:String;
    segundoApellido:String;
    correo:String;
    nombreUsuario:String;
    contraseña:String;
    ciudad:String;
    celular:String;
    nacimiento:Date;
    genero:String;
    foto: String;
    role?:number;
    isLogged:boolean=false;
    token?:String;
}
