<template>
  <n-form-item :label="t('settings.yellowish')" :show-feedback="false">
    <template #label>
      <span class="white-variance-label">
        {{ t('settings.yellowish') }}
      </span>
    </template>
    <n-slider v-model:value="yellowish" :max="2" :min="0" :step="0.01" />
  </n-form-item>
</template>

<script lang="ts" setup>
import { NFormItem, NSlider } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { useVModel } from '@vueuse/core'

const { t } = useI18n()

type yellowishType = number

const props = defineProps<{
  yellowish: yellowishType
}>()

const emit = defineEmits<{
  (e: 'update:yellowish', value: yellowishType): void
}>()

const yellowish = useVModel(props, 'yellowish', emit)
</script>

<style scoped>
.white-variance-label {
  transition: filter 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
