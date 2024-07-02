<script lang="ts" setup>
import Baselfurs from "@/assets/img/baselfurs.png";
type Project = {
  name: string;
  url: URL;
  description: string;
  image?: string;
};

const projects = [
  {
    name: "BaselFurs Website",
    url: new URL("https://baselfurs.ch/"),
    description: "This website is used for the furry community in the Basel region, to list events and to register to them!",
    image: Baselfurs
  },
] as Project[];
</script>

<template>
  <main>
    <div class="hero">
      <h1>Projects</h1>
      <p>
        Want to find out about what I've been working on lately? Here you go!
      </p>
    </div>

    <div class="" id="projects">
      <ul>
        <li v-for="(project, i) in projects" :key="i">
          <div class="head">
            <a :href="project.url.toString()">
              <img :src="project.image" :alt="`An image of the ${project.name} project`">
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
  </main>
</template>

<style lang="scss" scoped>
@use "@/assets/consts";
@use "sass:color";

#projects {
  width: 90%;
  margin: 0 auto;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    li {
      display: flex;
      flex-direction: column;
      padding: 1.5em;
      border: 1px solid color.mix(consts.$dark-background, consts.$light-background, 80%);
      max-width: 30%;
      border-radius: 1.25em;
      margin: 1.25em;
      background-color: transparentize(color.mix(consts.$dark-background, consts.$light-background, 98%), .3);
      backdrop-filter: blur(1.5rem);

      .head {
        display: flex;
        flex-direction: row;
        align-items: center;

        >a {
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
            margin-bottom: .5em;
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
