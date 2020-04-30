//@flow

// actions
export const TypesSingIn = {
    LOAD_REQUEST: '@auth/LOAD_REQUEST',
    LOAD_SUCCESS: '@auth/LOAD_SUCCESS',
    LOAD_FAILURE: '@auth/LOAD_FAILURE',
};

// data types
export type DataSingIn = {
    id?: Number,
    name?: string,
    email: String,
    password: string,
};

// state type
export type StateSingIn = {
    data: DataSingIn,
    loading: Boolean,
    error: Boolean,
};
