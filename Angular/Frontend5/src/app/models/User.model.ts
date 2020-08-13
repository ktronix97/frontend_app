export class UserModel{
    id_usuario?:String;
    primer_nombre:String;
    segundo_nombre:String;
    primer_apellido:String;
    segundo_apellido:String;
    correo:String;
    nombre_usuario:String;
    clave:String;
    contraseña:String;
    ciudad:String;
    celular:String;
    nacimiento:Date;
    genero:String;
    foto: String;
    rol?:number;
    isLogged:boolean=false;
    token?:String;
}

