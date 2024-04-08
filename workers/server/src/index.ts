import type AddService from 'add'
import { Hono } from 'hono'

type Bindings = {
  AddService: Service<AddService>
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', async (c) => {
  const result = await c.env.AddService.add(1, 2)
  return c.body(result.toString())
})

export default app
