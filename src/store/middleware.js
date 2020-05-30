/**
 * @flow
 */

import produce from 'immer';

// Use immer to state
export const immer = config => (set, get, api) =>
    config(fn => set(produce(fn)), get, api);
