<template>
  <div>
    <LoadingSpinner v-if="loading" />
    <p v-if="error" class="error">{{ error }}</p>
    <div v-else-if="user">
      <h2>{{ user.name }}</h2>
      <p>Email: {{ user.email }}</p>
      <p>Phone: {{ user.phone }}</p>
      <p>
        Website: <a :href="'https://' + user.website">{{ user.website }}</a>
      </p>
      <router-link to="/">Back to Users</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner.vue";

export default {
  components: { LoadingSpinner },
  props: ["id"],
  data() {
    return { user: null, loading: false, error: null };
  },
  async created() {
    this.loading = true;
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${this.id}`
      );
      this.user = response.data;
    } catch (err) {
      this.error = "User not found!";
    } finally {
      this.loading = false;
    }
  },
};
</script>
