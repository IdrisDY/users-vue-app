<template>
  <div class="flex flex-col">
    <div class="search-bar-container">
      <SearchBar @search="handleSearch" />
    </div>

    <LoadingSpinner v-if="loading" />
    <p v-if="error" class="error">{{ error }}</p>
    <p v-else-if="filteredUsers.length === 0">No users found.</p>
    <div v-else class="user-list">
      <UserCard v-for="user in filteredUsers" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UserCard from "./UserCard.vue";
import SearchBar from "./SearchBar.vue";
import LoadingSpinner from "./LoadingSpinner.vue";

export default {
  components: { UserCard, SearchBar, LoadingSpinner },
  data() {
    return { users: [], searchQuery: "", loading: false, error: null };
  },
  computed: {
    filteredUsers() {
      return this.users.filter((user) =>
        user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    handleSearch(query) {
      this.searchQuery = query;
    },
  },
  async created() {
    this.loading = true;
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      this.users = response.data;
    } catch (err) {
      this.error = "Failed to load users!";
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.user-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}
.error {
  color: red;
}
.search-bar-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;

  padding-inline: 12px;
}
.flex {
  display: flex;
  padding-inline: 20px;
}
.flex-col {
  flex-direction: column;
  gap: 16px;
}
</style>
