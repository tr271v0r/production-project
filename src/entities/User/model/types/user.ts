
export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
    MODERATOR = 'MODERATOR'
}
export interface User{
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
}

export interface UserSchema{
    authData?: User;

    // _ говорит о том что флаг нельзя менять
    _inited?: boolean;
}
