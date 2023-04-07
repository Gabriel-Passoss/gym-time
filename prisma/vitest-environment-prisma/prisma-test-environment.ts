import { Environment } from 'vitest'

export default <Environment>{
  name: 'prisma',
  async setup() {
    return {
      teardown() {},
    }
  },
}
