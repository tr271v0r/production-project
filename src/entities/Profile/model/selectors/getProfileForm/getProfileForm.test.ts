import { StateSchema } from 'app/providers/StoreProvider';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return a profile form', () => {
        const form = {
            username: 'admin',
            age: 22,
            city: 'asf',
            country: Country.Belarus,
            currency: Currency.USD,
            first: 'asd',
            lastname: 'kjhgf',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });

    test('should to work with empty values', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
