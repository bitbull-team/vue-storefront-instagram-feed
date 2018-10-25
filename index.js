import extensionStore from './store'
const EXTENSION_KEY = 'instagram-stream'

export default function (app, router, store, config) {
  console.debug('Instagram stream extension registered')
  store.registerModule(EXTENSION_KEY, extensionStore) // add custom store
  return { EXTENSION_KEY, extensionStore }
}
