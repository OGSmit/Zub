<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="modal"
        @keydown.esc="handleEscape"
        tabindex="-1"
      >
        <div class="modal__overlay" @click="handleOverlayClick"></div>
        <div class="modal__container" :class="containerClass" @click.stop>
          <button
            v-if="showCloseButton"
            class="modal__close"
            @click="close"
            aria-label="Закрыть"
          >
            <span class="modal__close-icon">×</span>
          </button>
          <div class="modal__content">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, watch, nextTick, onUnmounted } from 'vue'

interface Props {
  modelValue: boolean
  closeOnOverlay?: boolean
  closeOnEscape?: boolean
  showCloseButton?: boolean
  size?: 'small' | 'medium' | 'large' | 'full'
}

const props = withDefaults(defineProps<Props>(), {
  closeOnOverlay: true,
  closeOnEscape: true,
  showCloseButton: true,
  size: 'medium'
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'close': []
}>()

const isOpen = computed(() => props.modelValue)

const containerClass = computed(() => {
  return `modal__container--${props.size}`
})

const close = () => {
  emit('update:modelValue', false)
  emit('close')
}

const handleOverlayClick = () => {
  if (props.closeOnOverlay) {
    close()
  }
}

const handleEscape = (event: KeyboardEvent) => {
  if (props.closeOnEscape && event.key === 'Escape') {
    close()
  }
}

// Блокировка скролла body при открытом модальном окне
watch(isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
    // Фокус на модальное окно для поддержки навигации с клавиатуры
    nextTick(() => {
      const modal = document.querySelector('.modal')
      if (modal) {
        ;(modal as HTMLElement).focus()
      }
    })
  } else {
    document.body.style.overflow = ''
  }
})

// Очистка при размонтировании
onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  outline: none;

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
  }

  &__container {
    position: relative;
    background: $white;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    max-height: 90vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    z-index: 1;
    animation: modalSlideIn 0.3s ease-out;

    &--small {
      width: 100%;
      max-width: 400px;
    }

    &--medium {
      width: 100%;
      max-width: 600px;
    }

    &--large {
      width: 100%;
      max-width: 900px;
    }

    &--full {
      width: 100%;
      max-width: 1200px;
    }

    @include mobile {
      max-width: 100%;
      max-height: 95vh;
      border-radius: 16px 16px 0 0;
      margin-top: auto;
    }
  }

  &__close {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 40px;
    height: 40px;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
      transform: rotate(90deg);
    }

    &:active {
      transform: rotate(90deg) scale(0.95);
    }
  }

  &__close-icon {
    font-size: 28px;
    line-height: 1;
    color: $text-dark;
    font-weight: 300;
  }

  &__content {
    padding: 32px;
    overflow-y: auto;
    flex: 1;

    @include mobile {
      padding: 24px 20px;
    }

    // Кастомный скроллбар
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 4px;

      &:hover {
        background: rgba(0, 0, 0, 0.3);
      }
    }
  }
}

// Анимации появления/исчезновения
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal__container,
.modal-leave-active .modal__container {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;

  .modal__container {
    transform: translateY(-20px) scale(0.95);
    opacity: 0;
  }
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;

  .modal__container {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

@keyframes modalSlideIn {
  from {
    transform: translateY(-20px) scale(0.95);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}
</style>
