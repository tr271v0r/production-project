import { StateSchema } from 'app/providers/StoreProvider';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
    test('should return true', () => {
        const isLoading = true;
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading,
            },
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(isLoading);
    });

    test('should to work with empty values', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
