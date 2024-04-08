# My first JS RPC for Cloudflare Workers

This is my first project using [the PRC feature](https://developers.cloudflare.com/workers/runtime-apis/rpc/) for Cloudflare Workers.

## Features

- Minimal
- Monorepo with Yarn
- TypeScript Support

## Structure

```txt
.
├── package.json
├── tsconfig.json
└── workers
    ├── calc // A service to provide functions of a calculator
    │   ├── package.json
    │   ├── src
    │   │   └── index.ts
    │   ├── tsconfig.json
    │   └── wrangler.toml
    └── server // A server to use the calc service
        ├── package.json
        ├── src
        │   └── index.ts
        ├── tsconfig.json
        └── wrangler.toml
```

## Codes

`workers/calc/src/index.ts`:

```ts
import { WorkerEntrypoint } from 'cloudflare:workers'

export default class Calc extends WorkerEntrypoint {
  add(a: number, b: number) {
    return a + b
  }
}
```

`workers/server/src/index.ts`:

```ts
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
```

## How to try

```sh
yarn install
yarn calc:build
yarn dev
```

## References

- https://blog.cloudflare.com/javascript-native-rpc
- https://github.com/sor4chi/minimun-workers-service-bindings-rpc

## Author

Yusuke Wada

## License

MIT
