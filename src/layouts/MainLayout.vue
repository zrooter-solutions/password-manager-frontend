<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <MainLayoutHeader />
    </q-header>

    <q-page-container class="bg-grey-2">
      <div class="row q-pa-md">
        <div class="col-12 col-md-3">
          <LeftSidebar />
        </div>
        <div class="col-12 col-md-9 q-px-xl">
          <router-view />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import MainLayoutHeader from "src/components/layouts/MainLayoutHeader.vue"
import LeftSidebar from "src/components/layouts/LeftSidebar.vue"
</script>
<style lang="scss" scoped>
.q-toolbar,
.bg-grey-2 .row {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
