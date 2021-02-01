<template>
  <form>
    <div class="form-control">
      <label for="firstname">Firstname</label>
      <input type="text" v-model="firstname" id="firstname" />
    </div>
    <div class="form-control">
      <label for="lastname">Lastname</label>
      <input type="text" v-model="lastname" id="lastname" />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea type="text" v-model="description" id="description" rows="5"></textarea>
    </div>
    <div class="form-control">
      <label for="hRate">Hourly Rate</label>
      <input type="number" v-model="hRate" id="hRate" />
    </div>
    <div class="form-control">
      <h3>Areas of Expertise</h3>
      <div>
        <input type="checkbox" v-model="areas" value="frontend" id="frontend" />
        <label for="frontend">Frontend Deverloper</label>
      </div>
      <div>
        <input type="checkbox" v-model="areas" value="backend" id="backend" />
        <label for="backend">Backend Deverloper</label>
      </div>
      <div>
        <input type="checkbox" v-model="areas" value="career" id="career" />
        <label for="career">Career Deverloper</label>
      </div>
    </div>
    <item-button @click.prevent="handleSubmit()"> Register </item-button>
  </form>
</template>

<script>
// import axios from 'axios';
import ItemButton from "../common/ItemButton.vue";
export default {
  components: { ItemButton },
  data() {
    return {
      firstname: "",
      lastname: "",
      description: "",
      hRate: "",
      areas: [],
    };
  },
  methods: {
    handleSubmit() {
      let user = JSON.parse( localStorage.getItem("checkLogin"));
      let dataCoach = {
        areas: this.areas,
        description: this.description,
        firstName: this.firstname,
        hourlyRate: this.hRate,
        lastName: this.lastname,
      };

      this.$store.dispatch({
        type: "handlePostDataCoach",
        url: `https://coaches-project-8d77f-default-rtdb.firebaseio.com/coaches/${user.localId}.json?auth=${user.idToken}`,
        data: dataCoach,
      });

      this.$router.push("/coaches");

      //  let dataRequest = {
      //         message: "",
      //         userEmail: user.email,
      //       };
      // this.$store.dispatch({
      //   type: "handlePostDataRequest",
      //   url: "https://coaches-project-8d77f-default-rtdb.firebaseio.com/request.json",
      //   data: dataRequest,
      // });
    },
  },
};
</script>

<style>
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
.form-control input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}
.form-control input[type="checkbox"] + label {
  font-weight: 400;
  display: inline;
  margin: 0 0 0 0.5rem;
}
</style>
