import { StateSchema } from 'app/providers/StoreProvider';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return a profile data', () => {
        const data = {
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
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should to work with empty values', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
