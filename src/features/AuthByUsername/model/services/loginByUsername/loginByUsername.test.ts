import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername.test', () => {
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;

    // beforeEach(()=>{
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // })

    // test('success login', async () => {
    //     const userValue = {username:'123', id:'1'};

    //     mockedAxios.post.mockReturnValue(Promise.resolve({
    //         data: userValue
    //     }));
    //     const action = loginByUsername({username:'123', password:'123'});
    //     const result = await action(dispatch, getState, undefined);
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    //     expect(dispatch).toHaveBeenCalledTimes(3);//проверка количества вызовов dispatch
    //     expect(mockedAxios.post).toHaveBeenCalled();//проверка на то, выполнился ли запрос на сервак
    //     expect(result.meta.requestStatus).toBe('fulfilled');//запрос выполнился и никаких ошибок
    //     expect(result.payload).toEqual(userValue);
    // }),

    // test('error login', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({
    //         status: 403
    //     }));
    //     const action = loginByUsername({username:'123', password:'123'});
    //     const result = await action(dispatch, getState, undefined);
    //     expect(dispatch).toHaveBeenCalledTimes(2);//проверка количества вызовов dispatch
    //     expect(mockedAxios.post).toHaveBeenCalled();//проверка на то, выполнился ли запрос на сервак
    //     expect(result.meta.requestStatus).toBe('rejected');//запрос выполнился и никаких ошибок
    //     expect(result.payload).toBe('error');
    // })

    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('success login', async () => {
        const userValue = { username: '123', id: '1' };

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const result = await thunk.callThunk({ username: '123', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);// проверка количества вызовов dispatch
        expect(thunk.api.post).toHaveBeenCalled();// проверка на то, выполнился ли запрос на сервак
        expect(result.meta.requestStatus).toBe('fulfilled');// запрос выполнился и никаких ошибок
        expect(result.payload).toEqual(userValue);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);

        thunk.api.post.mockReturnValue(Promise.resolve({
            status: 403,
        }));

        const result = await thunk.callThunk({ username: '123', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);// проверка количества вызовов dispatch
        expect(thunk.api.post).toHaveBeenCalled();// проверка на то, выполнился ли запрос на сервак
        expect(result.meta.requestStatus).toBe('rejected');// запрос выполнился и никаких ошибок
        expect(result.payload).toBe('error');
    });
});
