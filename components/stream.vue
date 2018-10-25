<template>
  <div class="align-center py30 instagram">
    <h2 class="cl-accent uppercase"> {{ channel }}</h2>
    <div class="images-list" v-if="isConfigured">
      <div class="image" v-for="(photo, i) in feed" :key="i">
        <a :href="photo.link" class="inner" :style="{ backgroundImage: 'url(' + photo.images.standard_resolution.url + ')' }" target="_blank">
          <img :src="photo.images.thumbnail.url" :width="photo.images.thumbnail.width" :height="photo.images.thumbnail.height">
        </a>
      </div>
    </div>
    <div v-else>{{ $t('Configure instagram extention') }}</div>
  </div>
</template>

<script>
import config from 'config'
import {mapActions, mapGetters} from 'vuex'
export default {
  data () {
    return {
      channel: config.instagram.channel,
      imgHeight: 0
    }
  },
  computed: {
    ...mapGetters({
      getInstagramFeed: 'getInstagramFeed'
    }),
    isConfigured () {
      return !!config.instagram
    },
    feed () {
      return this.$store.getters.getInstagramFeed
    }
  },
  methods: {
    ...mapActions({
      updateInstagramPhotos: 'updateInstagramPhotos'
    })
  },
  created () {
    if (this.isConfigured) {
      this.updateInstagramPhotos(config.instagram.token)
    }
  }
}
</script>

<style lang="scss" scoped>
  .image {
    position: relative;
    overflow: hidden;
  }
  .inner {
    width: 100%;
    height: 100%;
    background-position: 50% 50%;
    cursor: pointer;
    background-size: cover;
    display: block;
    &:hover {
      opacity: 0.7;
    }
  }
  .instagram {
    $margin-left: 1%;
    margin: 0 auto;
    .image {
      display: inline-block;
      max-width: 300px;
      width: (100%-($margin-left*2))/3;
      + .image {
        margin-left: $margin-left;
      }
      img {
        width: 100%;
        height: auto;
        opacity: 0;
      }
    }
  }
</style>
