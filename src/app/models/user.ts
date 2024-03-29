export interface UserToken{
    user:User;
    token:string;
}

export interface User{
    id?: number;
    name: string;
    last_name: string;
    email: string;
    password?: string;
    type: string;
    address: string;
}