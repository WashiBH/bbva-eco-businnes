export class User {
    email: string;
    password: string;
}

export class Entidad {
    ruc: string = null;
    nroTarjeta: string = null;
    claveWeb: string = null;
    consumoLuz: number = 0;
    consumoAgua: number = 0;
    consumoGas: number = 0;
    correo: string = null;
    telefono: string = null;
    usuario: string = null;
    password: string = null;
    repeatPassword: string = null;
}

export let RUCS_REGISTRADOS = [
    {ruc: '12345678901' }
];

export let LISTA_USUARIOS = [
    {email: 'washington.blas.h@gmail.com', password: '12345'}
];