import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return the value, that contained in the state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'verySecretPassword',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toBe(
            'verySecretPassword',
        );
    });

    test('should to work with the empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toBe('');
    });
});
