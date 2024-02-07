import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return the value (username), that contained inside the state of loginForm', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'User_Name',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toBe('User_Name');
    });

    test('should return the empty string with the empty state of loginForm', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toBe('');
    });
});
