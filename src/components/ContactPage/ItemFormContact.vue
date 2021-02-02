<template>
  <form>
    <div class="form-control">
      <label for="email">Your E-mail</label>
      <input type="email" id="email" v-model="email" />
    </div>
    <div class="form-control">
      <label for="message">Message</label>
      <textarea rows="5" id="message" required v-model="messages"></textarea>
    </div>
    <div class="action">
      <item-button @click="handleSubmitRequest">Send Message</item-button>
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
      err: false,
    };
  },
  methods: {
    handleSubmitRequest() {
      let dataPostRequest = {
        userEmail: this.email,
        message: this.messages,
      };
      if (this.email == "" && this.messages == "") {
        this.err = true;
        event.preventDefault();
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
