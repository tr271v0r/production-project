import { FeatureFlags } from '@/shared/types/featureFlags';
import { UserRole } from '../consts/consts';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlags;
}

export interface UserSchema {
    authData?: User;

    // _ говорит о том что флаг нельзя менять
    _inited?: boolean;
}
