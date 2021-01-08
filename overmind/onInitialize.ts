import { OnInitialize } from 'overmind'

export const onInitialize: OnInitialize = async (ctx, instance) => {
  const value = await ctx.effects.storage.getValue();

  if (value) {
    ctx.state.value = Number(value)
  }

  ctx.state.isReady = true;

  instance.reaction((s) => s.value, (num) => {
    if (ctx.state.isReady) {
      ctx.effects.storage.saveValue(num)
    }
  })

}
