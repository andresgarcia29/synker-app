<template>
  <div class="d-flex ma-5">
    <v-text-field
      label="Search..."
      prepend-icon="mdi-card-search"
      @keyup="$emit('search', search)"
      v-model="search"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  emit: ['search'],
  data() {
    return {
      search: '',
    }
  },
}
</script>

<style></style>
