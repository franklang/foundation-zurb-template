<template>
  <div>
    {% verbatim %}
      {{hello}}
    {% endverbatim %}
  </div>
</template>
<script>
export default {
  data() {
    return {
      hello: 'Hello from Vue!'
    };
  },
};
</script>
