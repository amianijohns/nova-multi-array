<template>
  <DefaultField
    :field="field"
    :errors="errors"
    :show-help-text="showHelpText"
    :full-width-content="fullWidthContent"
  >
    <template #field>
        <ul v-for="(item, index) in items" :key="index" class="gap-y-2 mb-2">
            <input
            :id="field.attribute + index"
            type="text"
            class="w-full form-control form-input form-input-bordered"
            :class="errorClasses"
            placeholder="Enter a item..."
            v-model="item.value"
            />
        </ul>
        <button @click.prevent="addItem" class="hover:underline">Add Item</button>
    </template>
  </DefaultField>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova'

export default {
  mixins: [FormField, HandlesValidationErrors],

  props: ['resourceName', 'resourceId', 'field'],

  data() {
    return {
      items: [{ value: '' }],
    }
  },

  methods: {
    /*
     * Set the initial, internal value for the field.
     */
    setInitialValue() {
        const items = JSON.parse(this.field.value)
            .map(item => ({ value: item }));
      this.items = items || [{ value: '' }]
    },

    /**
     * Fill the given FormData object with the field's internal value.
     */
    fill(formData) {
        formData.append(
            this.field.attribute,
            JSON.stringify(this.items
                .filter(item => item.value !== '')
                .map(item => item.value)
            )
        )
    },

    /**
     * Add a new input to the list of inputs.
     */
    addItem() {
        this.items.push({ value: '' })
    },
  },
}
</script>
