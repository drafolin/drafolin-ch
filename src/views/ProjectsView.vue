<script lang="ts" setup>
import projects from '@/models/projects'
import ProjectList from '@/components/ProjectList.vue'
</script>

<template>
  <main>
    <div class="hero">
      <h1>Projects</h1>
      <p>Want to find out about what I've been working on lately? Here you go!</p>
    </div>

    <ProjectList :projects="projects" />
  </main>
</template>

<style lang="scss" scoped></style>
