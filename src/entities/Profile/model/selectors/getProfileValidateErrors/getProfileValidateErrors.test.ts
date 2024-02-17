import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { validateProfileError } from '../../types/profile';

describe('getProfileValidateErrors.test', () => {
    test('should return an array of validate errors', () => {
        const validateErrors = [validateProfileError.SERVER_ERROR];
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors,
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors);
    });

    test('should to work with empty values', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
