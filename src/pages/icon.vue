<template lang="pug">
  page
    svg-icon(v-for='(icon,index) of icons' :key='index' :icon='icon' color='red')
</template>

<script>
import AddressBook from '@fortawesome/fontawesome-free/svgs/regular/address-book.svg'
export default {
  name: 'icon',
  data() {
    return {
      icons: [
        require('@fortawesome/fontawesome-free/svgs/brands/500px.svg'),
        AddressBook
      ]
    }
  }
}
</script>
