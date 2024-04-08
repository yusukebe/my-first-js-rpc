import { WorkerEntrypoint } from 'cloudflare:workers'

export default class AddService extends WorkerEntrypoint {
  add(a: number, b: number) {
    return a + b
  }
}
