import {Action, AsyncAction} from 'overmind';

export const increment: Action<number> = (ctx, inc) => {
  ctx.state.value += inc;
}

export const decrement: Action<number> = (ctx, dec) => {
  ctx.state.value -= dec;
}
