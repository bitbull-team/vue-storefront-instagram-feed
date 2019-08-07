import fetch from 'isomorphic-fetch'
import config from 'config'

const INST_RECENT = 'https://api.instagram.com/v1/users/self/media/recent/'

const state = {
  InstagramPhotos: {}
}

const getters = {
  getInstagramFeed: (state) => state.InstagramPhotos
}

const actions = {
  updateInstagramPhotos (context, customOptions) {
    const token = customOptions !== undefined && customOptions.token ? customOptions.token : config.instagram.token
    const count = customOptions !== undefined && customOptions.count ? customOptions.count : config.instagram.count

    if (typeof navigator !== 'undefined' ? navigator.onLine : true) {
      return fetch(INST_RECENT + '?access_token=' + token + '&count=' + count)
        .then((response) => {
          return response.json()
        }).then((jsonResponse) => {
          if (jsonResponse.meta.code === 200) {
            context.commit('updateInstagramPhotos', jsonResponse.data)
          }
        })
    }
  }
}

const mutations = {
  updateInstagramPhotos (state, data) {
    state.InstagramPhotos = data
  }
}

export const store = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
