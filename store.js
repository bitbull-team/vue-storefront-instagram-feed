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
  updateInstagramPhotos (context, token, count) {
    if (typeof navigator !== 'undefined' ? navigator.onLine : true) {
      return fetch(INST_RECENT + '?access_token=' + token + '&count=' + config.instagram.count).then((response) => {
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

export default {
  state,
  getters,
  actions,
  mutations
}
