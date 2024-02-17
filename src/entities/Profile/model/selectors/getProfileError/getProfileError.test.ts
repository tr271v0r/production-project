import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    test('should return error', () => {
        const error = 'It does not error';
        const state: DeepPartial<StateSchema> = {
            profile: {
                error,
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual(error);
    });

    test('should to work with empty values', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
