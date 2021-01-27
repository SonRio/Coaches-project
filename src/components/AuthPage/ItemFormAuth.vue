<template>
  <form>
    <div class="form-control">
      <label for="email">E-mail</label>
      <input type="email" id="email" required />
    </div>
    <div class="form-control">
      <label for="password">Password</label>
      <input type="password" id="password" />
    </div>
    <item-button @click="handleSubmit()"> {{ textBtn }} </item-button>
    <item-link @click="handleChangeAction()" class="flat" :linkTo="linkToReg">
      {{ textLink }} instead
    </item-link>
  </form>
</template>

<script>
import ItemButton from "../common/ItemButton.vue";
import ItemLink from "../common/ItemLink.vue";
export default {
  components: { ItemButton, ItemLink },
  data() {
    return {
      linkToReg: "#",
      checkAction: false,
      textBtn: "",
      textLink: "",
    };
  },
  methods: {
    handleChangeAction() {
      this.checkAction = !this.checkAction;
      if (this.checkAction) {
        (this.textBtn = "Login"), (this.textLink = "Signup");
      } else {
        (this.textBtn = "Signup"), (this.textLink = "Login");
      }
    },
    handleSubmit(){
      console.log(this);
    }
  },
  created(){
    this.handleChangeAction()
  }
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}
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
.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}
.flat:hover {
  background-color: #edd2ff;
}
</style>
