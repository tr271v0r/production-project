export interface User{
    id: string;
    username: string;
}

export interface UserSchema{
    authData?: User;

    // _ говорит о том что флаг нельзя менять
    _inited?: boolean;
}
