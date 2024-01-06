<template>
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
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>