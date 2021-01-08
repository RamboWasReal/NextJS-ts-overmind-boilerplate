import {createOvermind, derived, IConfig} from 'overmind';
import {createHook} from 'overmind-react';
import {merge, namespaced} from 'overmind/config';

import * as actions from './actions';
import {effects} from './effects';
import {onInitialize} from './onInitialize';

const config = merge({
    state: {
        value: 0,
        isReady: false,
        bigValue: derived(s => s.value * 100)
    },
    actions,
    effects,
    onInitialize,
}, namespaced({}))

export const useOvermind = createHook()

declare module 'overmind' {
    interface Config
        extends IConfig<{
            state: typeof config.state;
            actions: typeof config.actions;
            effects: typeof config.effects;
        }> {
    }

    // Due to circular typing we have to define an
    // explicit typing of state, actions and effects since
    // TS 3.9
}


export const overmind = createOvermind(config, {
    devtools: true
});
