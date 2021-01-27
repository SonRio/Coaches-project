<template>
  <form action="#">
    <div class="form-control">
      <label for="email">Your E-mail</label>
      <input type="email" id="email" />
    </div>
    <div class="form-control">
      <label for="message">Message</label>
      <textarea rows="5" id="message"></textarea>
    </div>
    <div class="action">
      <item-button>Send Message</item-button>
    </div>
  </form>
</template>

<script>
import ItemButton from "../common/ItemButton.vue";
export default {
  components: { ItemButton },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}
.form-control label {
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: block;
}
.form-control input,
.form-control textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}
.action {
  text-align: center;
}
</style>
