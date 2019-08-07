import { createModule } from '@vue-storefront/core/lib/module'
import { store } from './store'
const KEY = 'instagram-stream'

console.debug('Instagram stream extension registered')
export const InstagramExtension = createModule({
  key: KEY,
  store: { modules: [{ key: KEY, module: store }] }
})

