<template>
  <span>{{ fieldValue }}</span>
</template>

<script>
export default {
  props: ['resourceName', 'field'],

  computed: {
    fieldValue() {
        const items = JSON.parse(this.field.value)
        return this.field.displayedAs || items.join(', ')
    },
  }
}
</script>
