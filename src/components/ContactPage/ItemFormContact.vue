<template>
  <form @submit.prevent="handleSubmitRequest">
    <div class="form-control">
      <label for="email">Your E-mail</label>
      <input type="email" id="email" v-model="email" />
    </div>
    <div class="form-control">
      <label for="message">Message</label>
      <textarea rows="5" id="message" required v-model="messages"></textarea>
    </div>
    <p v-if="errors" class="errors">
      Please enter a valid email and non-empty message.
    </p>
    <div class="action">
      <item-button>Send Message</item-button>
    </div>
  </form>
</template>

<script>
import ItemButton from "../common/ItemButton.vue";
export default {
  components: { ItemButton },
  data() {
    return {
      email: "",
      messages: "",
      errors: false,
    };
  },
  methods: {
    handleSubmitRequest() {
      let dataPostRequest = {
        userEmail: this.email,
        message: this.messages,
      };
      if (this.email == "" || this.messages == "") {
        this.errors = true;
      } else {
        this.$store.dispatch({
          type: "handlePostDataRequest",
          url: `https://coaches-project-8d77f-default-rtdb.firebaseio.com/request/${this.$route.params.id}.json`,
          data: dataPostRequest,
        });
        this.$router.push({ path: "/coaches" });
        event.preventDefault();
      }
    },
  },
};
</script>

<style scoped lang="scss">
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
  .errors {
    color: red;
    font-weight: 600;
  }
  .form-control {
    margin: 0.5rem 0;
    label {
      font-weight: 700;
      margin-bottom: 0.5rem;
      display: block;
    }
    input,
    textarea {
      display: block;
      width: 100%;
      font: inherit;
      border: 1px solid #ccc;
      padding: 0.15rem;
    }
  }
  .action {
    text-align: center;
  }
}
</style>
