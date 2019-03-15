<template lang="pug">
  page
    img(v-for='(value,key) of img' :key='`img_${key}`' :alt='key' :src='value')
</template>

<script>
import at from 'eva-icons/fill/svg/at.svg'
import activity from 'eva-icons/fill/svg/activity.svg'
export default {
  name: 'eva',
  data() {
    return {
      img: {
        at,
        activity
      }
    }
  }
}
</script>
