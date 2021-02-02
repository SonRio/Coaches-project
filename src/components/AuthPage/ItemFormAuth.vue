<template>
  <form>
    <div class="form-control">
      <label for="email">E-mail</label>
      <input type="email" v-model="email" id="email" />
    </div>
    <div class="form-control">
      <label for="password">Password</label>
      <input type="password" v-model="password" id="password" required />
    </div>
    <p v-if="errors">
      Please enter a valid email and password (must be at least 6 characters long).
    </p>
    <item-button @click="handleSubmit()"> {{ textBtn }} </item-button>
    <item-link @click="handleChangeAction()" class="flat" :linkTo="linkToReg">
      {{ textLink }} instead
    </item-link>
  </form>
</template>

<script>
import axios from "axios";
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
      email: "",
      password: "",
      errors: false,
      path: "",
    };
  },
  methods: {
    handleChangeAction() {
      // SET TEXT FOR BTN
      this.checkAction = !this.checkAction;
      if (this.checkAction) {
        (this.textBtn = "Login"), (this.textLink = "Signup");
      } else {
        (this.textBtn = "Signup"), (this.textLink = "Login");
      }
    },
    handleSubmit() {
      if (this.email == "" && this.password == "") {
        this.errors = true;
        event.preventDefault();
      } else {
        let dataPost = {
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        };
        if (this.textBtn == "Signup") {
          // SIGN UP
          console.log("SIGN UP");
          event.preventDefault();
          axios
            .post(
              "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCe3EbXvHvc8FM4F00XoX8Fm_hOQDDctic",
              dataPost
            )
            .then((res) => {
              console.log("REGISTER CORRECTED");
              localStorage.setItem("userId", JSON.stringify(res.data));
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          // LOGIN
          console.log("LOGIN");
          event.preventDefault();
          axios
            .post(
              "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCe3EbXvHvc8FM4F00XoX8Fm_hOQDDctic",
              dataPost
            )
            .then((res) => {
              console.log("LOGIN CORRECTED");
              let checkLogin = {
                idToken: res.data.idToken,
                localId: res.data.localId,
                email: res.data.email,
              };
              localStorage.setItem("checkLogin", JSON.stringify(checkLogin));
              if (this.$route.query.redirect) {
                this.$router.push({ path: "/register" });
              } else {
                this.$router.push({ path: "/coaches" });
              }
              this.$store.state.tokenId = checkLogin;
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    },
  },
  created() {
    this.handleChangeAction();
  },
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
