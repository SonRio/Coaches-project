<template>
  <form @submit="handleSubmit" method="post" novalidate="true">
    <div class="form-control" :class="firstname.err == '' ? '' : 'error'">
      <label for="firstname">Firstname</label>
      <input
        type="text"
        v-model="firstname.value"
        id="firstname"
        @keyup="handleCheckErrItem('firstname', firstname)"
      />
      <p v-if="firstname.err">{{ firstname.err }}</p>
    </div>
    <div class="form-control" :class="lastname.err == '' ? '' : 'error'">
      <label for="lastname">Lastname</label>
      <input
        type="text"
        v-model="lastname.value"
        id="lastname"
        @keyup="handleCheckErrItem('lastname', lastname)"
      />
      <p v-if="lastname.err">{{ lastname.err }}</p>
    </div>
    <div class="form-control" :class="description.err == '' ? '' : 'error'">
      <label for="description">Description</label>
      <textarea
        type="text"
        v-model="description.value"
        id="description"
        rows="5"
         @keyup="handleCheckErrItem('description', description)"
      ></textarea>
      <p v-if="description.err">{{ lastname.err }}</p>
    </div>
    <div class="form-control" :class="hRate.err == '' ? '' : 'error'">
      <label for="hRate">Hourly Rate</label>
      <input type="number" v-model="hRate.value" id="hRate" 
      @keyup="handleCheckErrItem('hRate', hRate)" />
      <p v-if="hRate.err">{{ hRate.err }}</p>
    </div>
    <div class="form-control">
      <h3>Areas of Expertise</h3>
      <div :class="areas.err == '' ? '' : 'error'">
        <input
          type="checkbox"
          v-model="areas.value"
          value="frontend"
          id="frontend"
          @change="handleCheckErrItem('areas', areas)"
        />
        <label for="frontend">Frontend Deverloper</label>
      </div>
      <div :class="areas.err == '' ? '' : 'error'">
        <input
          type="checkbox"
          v-model="areas.value"
          value="backend"
          id="backend"
          @change="handleCheckErrItem('areas', areas)"
        />
        <label for="backend">Backend Deverloper</label>
      </div>
      <div :class="areas.err == '' ? '' : 'error'">
        <input
          type="checkbox"
          v-model="areas.value"
          value="career"
          id="career"
          @change="handleCheckErrItem('areas', areas)"
        />
        <label for="career">Career Deverloper</label>
      </div>
      <p v-if="areas.err">{{ areas.err }}</p>
    </div>
    <item-button @click.prevent="handleSubmit()" type="submit"> Register </item-button>
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
      check: "",
    };
  },
  methods: {
    handleSubmit() {
      this.handleCheckAll();
      if (this.check) {
        console.log("post dc nha");
        let user = JSON.parse( localStorage.getItem("checkLogin"));
        let dataCoach = {
          areas: this.areas.value,
          description: this.description.value,
          firstName: this.firstname.value,
          hourlyRate: this.hRate.value,
          lastName: this.lastname.value,
        };
        // console.log(dataCoach);
        this.$store.dispatch({
          type: "handlePostDataCoach",
          url: `https://coaches-project-8d77f-default-rtdb.firebaseio.com/coaches/${user.localId}.json?auth=${user.idToken}`,
          data: dataCoach,
        });
        this.$router.push("/coaches");
      }
    },
    handleCheckAll() {
      this.handleCheckErrItem("firstname", this.firstname);
      this.handleCheckErrItem("lastname", this.lastname);
      this.handleCheckErrItem("description", this.description);
      this.handleCheckErrItem("hRate", this.hRate);
      this.handleCheckErrItem("areas", this.areas);
    },
    handleCheckErrItem(item, key) {
      switch (item) {
        case "firstname":
          if (key.value == "") {
            key.err = "First name must not be empty.";
            this.check = false;
          } else {
            if (key.value.charAt(0).toUpperCase() !== key.value.charAt(0)) {
              key.err = "First name must capitalize the first letter";
              this.check = false;
            } else {
              key.err = "";
              this.check = true;
            }
          }
          break;
        case "lastname":
          if (key.value == "") {
            this.check = false;
            key.err = "Last name must not be empty.";
          } else {
            if (key.value.length < 3) {
              this.check = false;
              key.err = "Last name must more than three chars.";
            } else {
              key.err = "";
              this.check = true;
            }
          }
          break;
        case "description":
          if (key.value.length == "") {
            this.check = false;
            key.err = "Description must not be empty.";
          } else {
            if (key.value.length > 100) {
              this.check = false;
              key.err = "You can only enter a maximum of 100 characters.";
            } else {
              (key.err = ""), (this.check = true);
            }
          }
          break;
        case "hRate":
          if (key.value.length == 0) {
            this.check = false;
            key.err = "Rate must be greater than 0.";
          } else {
            if (key.value < 0) {
              this.check = false;
              key.err = "The number must be greater than 0";
            } else {
              (key.err = ""), (this.check = true);
            }
          }
          break;
        case "areas":
          if (key.value.length == 0) {
            this.check = false;
            key.err = "At least one expertise must be selected.";
          } else {
            key.err = "";
            this.check = true;
          }
          break;
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
.error input,
.error textarea {
  border: 1px solid red;
}
.error label {
  color: red;
  font-weight: 600;
}
</style>
