<template>
    <div class="flex flex-col md:flex-row -mx-6 px-6 py-2 md:py-0 space-y-2 md:space-y-0">
        <h4 class="md:w-1/4 md:py-3 font-normal">{{ field.name }}</h4>
        <ul class="md:w-3/4 md:py-3 break-all lg:break-words gap-y-2">
            <li v-for="(item, itemIndex) in items" :key="index">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: ['index', 'resource', 'resourceName', 'resourceId', 'field'],

  computed: {
    items() {
        return JSON.parse(this.field.value)
    }
  }
}
</script>
