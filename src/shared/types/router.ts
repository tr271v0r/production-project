import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line mega/fsd-layers-import
import { UserRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
