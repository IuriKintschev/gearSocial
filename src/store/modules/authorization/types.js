//@flow

// actions
export const TypesSingIn = {
    LOAD_REQUEST: '@authSingnIn/LOAD_REQUEST',
    LOAD_SUCCESS: '@authSingnIn/LOAD_SUCCESS',
    LOAD_FAILURE: '@authSingnIn/LOAD_FAILURE',
};

export const TypesSingnUp = {
    LOAD_REQUEST: '@authSingnUp/LOAD_REQUEST',
};

export const TypesLogout = {
    LOAD_REQUEST: '@authLogout/LOAD_REQUEST',
};

export const TypesHost = {
    LOAD_REQUEST: '@host/LOAD_REQUEST',
};

// data types
export type DataSingIn = {
    id?: Number,
    name?: String,
    email: String,
    password: String,
    img?: String,
};

// state type
export type StateSingIn = {
    data: DataSingIn,
    loading: Boolean,
    error: Boolean,
    host: String,
};
