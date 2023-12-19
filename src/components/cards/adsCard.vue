<template>
  <div class="ad-card">
    <img :src="imageUrl" alt="Advertisement Image" class="ad-image" />
    <div class="ad-content">
      <h3 class="ad-title">{{ title }}</h3>
      <p class="ad-description">{{ description }}</p>
      <a :href="link" class="ad-button">Learn More</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.ad-card {
  display: flex;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.ad-image {
  width: 200px;
  height: 150px;
  object-fit: cover;
}

.ad-content {
  padding: 15px;
}

.ad-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.ad-description {
  margin-bottom: 15px;
}

.ad-button {
  display: inline-block;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.ad-button:hover {
  background-color: #0056b3;
}
</style>
