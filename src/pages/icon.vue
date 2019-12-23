<template lang="pug">
  page
    div(v-for='(type,i) of types' :key='i')
      div {{type}}
      svg-icon(v-for='(icon,id) of icons' :key='id' :icon='icon' :type='type' color='red' :id='id')
</template>

<script>
import AddressBook from '@fortawesome/fontawesome-free/svgs/regular/address-book.svg'
import at from 'eva-icons/fill/svg/at.svg'
export default {
  name: 'icon',
  data() {
    return {
      types: ['html', 'embed', 'object', 'iframe', 'svg'],
      icons: {
        at,
        '500px': require('@fortawesome/fontawesome-free/svgs/brands/500px.svg'),
        'address-book': AddressBook,
        'safari-pinned-tab': `${
          process.env.BASE_URL
        }static/img/icons/safari-pinned-tab.svg`
      }
    }
  }
}
</script>
