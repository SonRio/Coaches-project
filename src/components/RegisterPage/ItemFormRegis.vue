<template>
  <form>
    <div class="form-control">
      <label for="firstname">Firstname</label>
      <input
        type="text"
        v-model="firstname.value"
        id="firstname"
        @keyup="handleCheckErr('firstname')"
      />
      <p>{{ firstname.err }}</p>
    </div>
    <div class="form-control">
      <label for="lastname">Lastname</label>
      <input
        type="text"
        v-model="lastname.value"
        id="lastname"
        @keyup="handleCheckErr('lastname')"
      />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea
        type="text"
        v-model="description.value"
        id="description"
        rows="5"
        @keyup="handleCheckErr('description')"
      ></textarea>
    </div>
    <div class="form-control">
      <label for="hRate">Hourly Rate</label>
      <input type="number" v-model="hRate.value" id="hRate" />
    </div>
    <div class="form-control">
      <h3>Areas of Expertise</h3>
      <div>
        <input type="checkbox" v-model="areas.value" value="frontend" id="frontend" />
        <label for="frontend">Frontend Deverloper</label>
      </div>
      <div>
        <input type="checkbox" v-model="areas.value" value="backend" id="backend" />
        <label for="backend">Backend Deverloper</label>
      </div>
      <div>
        <input type="checkbox" v-model="areas.value" value="career" id="career" />
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
      firstname: {
        value: "",
        err: "",
      },
      lastname: {
        value: "",
        err: "",
      },
      description: {
        value: "",
        err: "",
      },
      hRate: {
        value: "",
        err: "",
      },
      areas: {
        value: [],
        err: "",
      },
      check : false
    };
  },
  methods: {
    handleSubmit() {
      // let user = JSON.parse( localStorage.getItem("checkLogin"));

      let dataCoach = {
        areas: this.areas.value,
        description: this.description.value,
        firstName: this.firstname.value,
        hourlyRate: this.hRate.value,
        lastName: this.lastname.value,
      };
      console.log(dataCoach);

      // this.$store.dispatch({
      //   type: "handlePostDataCoach",
      //   url: `https://coaches-project-8d77f-default-rtdb.firebaseio.com/coaches/${user.localId}.json?auth=${user.idToken}`,
      //   data: dataCoach,
      // });

      // this.$router.push("/coaches");
    },
    handleCheckErr(value) {
      let dataCoach = {
        areas: this.areas.value,
        description: this.description.value,
        firstName: this.firstname.value,
        hourlyRate: this.hRate.value,
        lastName: this.lastname.value,
      };
      switch (value) {
        case "firstname":
          if (dataCoach.firstName == "") {
            this.firstname.err = "Firstname must not be empty.";
          } else {
            console.log(
              dataCoach.firstName.charAt(0).toUpperCase(),
              dataCoach.firstName.charAt(0)
            );
            if (
              dataCoach.firstName.charAt(0).toUpperCase() !==
              dataCoach.firstName.charAt(0)
            ) {
              this.firstname.err = "First name must capitalize the first letter";
            }else{
              this.firstname.err = "";
              this.check = true
            }
          }
          break;
        case "lastname":
          if (dataCoach.lastName == "") {
            this.lastname.err = "Lastname must not be empty.";
            this.check = false;
          } else {
            if (dataCoach.lastName.length < 3) {
              this.lastname.err = "Lastname must more than three chars.";
            }
          }
          break;
        case "description":
          if (dataCoach.description.length == "") {
            this.description.err = "Description must not be empty.";
            this.check = false;
          }
          break;
      }
      return this.check;
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
