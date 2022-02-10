<script>
export default {
  name: 'BaseButton',
}
</script>

<template>
  <!-- This v-on="$listeners" is a way
  to assign events to an element in a component.
  Without it, Vue does not know where to listen
  for the events. -->
  <button v-on="$listeners">
    <slot name="text"> This is a button </slot>
  </button>
</template>

<style></style>
