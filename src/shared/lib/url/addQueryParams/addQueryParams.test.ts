import { getQueryParams } from './addQueryParams';

describe('shared/url.addQueryParams', () => {
    test('test with once param', () => {
        const param = getQueryParams({
            test: 'value',
        });
        expect(param).toBe('?test=value');
    });

    test('test with multiple params', () => {
        const param = getQueryParams({
            test: 'value',
            second: '2',
        });
        expect(param).toBe('?test=value&second=2');
    });

    test('test with undefined param', () => {
        const param = getQueryParams({
            test: 'value',
            second: undefined,
        });
        expect(param).toBe('?test=value');
    });
});
