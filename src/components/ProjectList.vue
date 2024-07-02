<script lang="ts" setup>
import type { Project } from '@/models/projects'

const { projects } = defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <div id="projects">
    <ul>
      <li v-for="(project, i) in projects" :key="i">
        <div class="head">
          <a :href="project.url.toString()">
            <img :src="project.image" :alt="`An image of the ${project.name} project`" />
          </a>
          <div class="base">
            <h2>
              {{ project.name }}
            </h2>
            <a :href="project.url.toString()">{{ project.url.host }}</a>
          </div>
        </div>
        <p>{{ project.description }}</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/consts';
@use 'sass:color';
#projects {
  width: 90%;
  margin: 0 auto;
  text-align: left;

  @media screen and (max-width: 500px) {
    width: 100%;
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding: 0;
    margin: 0;

    @media screen and (max-width: 500px) {
      flex-direction: column;
      flex-wrap: nowrap;
    }

    li {
      display: flex;
      flex-direction: column;
      padding: 1.5em;
      border: 1px solid color.mix(consts.$dark-background, consts.$light-background, 80%);
      max-width: 390px;
      border-radius: 1.25em;
      margin: 1.25em;
      background-color: transparentize(
        color.mix(consts.$dark-background, consts.$light-background, 98%),
        0.3
      );
      backdrop-filter: blur(1.5rem);

      .head {
        display: flex;
        flex-direction: row;
        align-items: center;

        > a {
          max-width: 33%;
          margin-right: 3%;
          img {
            max-width: 100%;
          }
        }
        .base {
          display: flex;
          flex-direction: column;
          h2 {
            margin: 0;
            margin-bottom: 0.5em;
          }
        }
      }
      p {
        font-weight: lighter;
        font-size: 14px;
      }
    }
  }
}
</style>
