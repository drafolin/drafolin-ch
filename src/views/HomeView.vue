<script setup lang="ts">
import { RouterLink } from 'vue-router'
import projects from '@/models/projects'
import ProjectList from '@/components/ProjectList.vue'
</script>

<template>
  <main>
    <div class="hero fullscreen">
      <h1>Your local tech derg <strong>Dråfølin</strong> here!</h1>
      <p>Hi and welcome to my website! Have a look around!</p>
      <RouterLink to="/about">About me</RouterLink>
    </div>

    <div class="hero">
      <h2>My projects</h2>
      <p>Here's some of the projects I've been working on!</p>
      <ProjectList :projects="projects.slice(0, 3)" />
      <p><a href="/projects">View more</a></p>
    </div>
  </main>
</template>
