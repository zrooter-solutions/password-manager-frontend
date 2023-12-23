<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-btn @click="router.push('/dashboard')" round flat>
            <q-avatar size="26px">
              <img src="src/assets/logo.png" />
            </q-avatar>
          </q-btn>
        </q-toolbar-title>
        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable v-ripple @click="router.push('/profile')">
                  <q-item-section avatar center>
                    <q-avatar size="24px">
                      <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                    </q-avatar>
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>{{ $t('Common.Profile') }}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section avatar center>
                    <q-avatar size="24px">
                      <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                    </q-avatar>
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>{{ $t('Common.Logout') }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="bg-grey-2">
      <div class="row q-pa-md">
        <div class="col-12 col-md-3">
          <q-card bordered>
            <q-card-section class="bg-grey-4">
              <div class="text-bold">{{ $t('Common.Profile') }}</div>
            </q-card-section>

            <q-separator />

            <q-card-section> {{ $t('Common.AllItems') }} </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-9 q-px-xl">
          <router-view />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
<style lang="scss" scoped>
.q-toolbar,
.bg-grey-2 .row {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
