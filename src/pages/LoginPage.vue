<template>
    <div class="row">
        <q-card square bordered class="login-page q-pa-lg shadow-1">
          <q-card-section>
              <div class="text-h5 q-mb-sm">Login in</div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input v-model="email" square filled clearable  type="email" label="Email" />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn unelevated color="primary" size="lg" class="full-width" label="Login" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">Not reigistered? Created an Account</p>
          </q-card-section>
        </q-card>
      </div>
</template>
<script setup lang="ts">
import { ref} from "vue";

const email = ref<string>('');
</script>
<style lang="scss" scoped> 
.login-page {
    min-width: 500px;
}
</style>