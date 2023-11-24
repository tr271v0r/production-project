import { StateSchema } from 'app/providers/StoreProvider';
import { TLSSocket } from 'tls';

export const getCounter = (state: StateSchema) => state.counter;
