<template>
  <input
    type="text"
    v-model="query"
    @input="updateSearch"
    placeholder="Search users..."
  />
</template>

<script>
export default {
  data() {
    return { query: "" };
  },
  methods: {
    updateSearch() {
      this.$emit("search", this.query);
    },
  },
};
</script>

<style scoped>
input {
  border: 1px solid #ddd;
  width: 30%;
  padding: 16px 10px;
  border-radius: 12px;
  margin-bottom: 16px;
}
input:hover,
input:focus-visible {
  border-color: lightslategray;
  outline-color: aquamarine;
  box-shadow: 0px 0px 2px 2px rgb(228, 224, 224);
}
</style>
