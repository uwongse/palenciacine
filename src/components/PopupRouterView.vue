<template>
<PopupBase @close="$router.back()" scrollable="true">
    <slot name="backdrop" slot="backdrop" />
    <slot />
</PopupBase>
</template>

<script>
import PopupBase from './PopupBase.vue'

export default {
  name: 'PopupRouterView',
  components: {
    PopupBase
  }
}
</script>
