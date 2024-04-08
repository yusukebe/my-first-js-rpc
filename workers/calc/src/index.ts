import { WorkerEntrypoint } from 'cloudflare:workers'

export default class Calc extends WorkerEntrypoint {
  add(a: number, b: number) {
    return a + b
  }
}
