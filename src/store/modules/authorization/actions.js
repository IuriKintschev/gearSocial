import { TypesSingIn, DataSingIn } from './types';

// request singIn
export function loadResquestSingIn(data: DataSingIn) {
    return {
        type: TypesSingIn.LOAD_REQUEST,
        payload: { data },
    };
}
