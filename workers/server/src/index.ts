import type Calc from 'calc'
import { Hono } from 'hono'

type Bindings = {
  CALC: Service<Calc>
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', async (c) => {
  const result = await c.env.CALC.add(1, 2)
  return c.body(result.toString())
})

export default app
