export  class ClienteModel {
  constructor(
  public nombre: string,
  public telefono: string,
  public email: string,
  public tipoDocumento: string,
  public numeroDocumento: string,
  public estado?: boolean, //Parametro opcional
  public createAt?: Date, //Parametro opcional
  public updateAt?: Date, //Parametro opcional
  public direccion?: string //Parametro opcional
  ) {
    
  }
}