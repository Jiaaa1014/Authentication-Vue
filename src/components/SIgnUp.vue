<template>
  <div class="">
    <h2>Sign Up</h2>
    <div class="form-group">
      <input
        type="text"
        placeholder="email"
        class="form-control"
        v-model="email"/>
        </div>
        <div>
      <input
        type="password"
        placeholder="password"
        class="form-control"
        v-model="password"/>
      <button class='entrybtn btn btn-outline-success' @click="signUp">Leave</button>
    </div>
    <br>
    <router-link to="/signin">Already a user? Sign in instead</router-link>
    <p>{{error.message}}</p>
    <br>
  </div>
</template>

<script>
import { firebaseApp } from "../firebaseApp";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: {
        message: ""
      }
    };
  },
  methods: {
    signUp() {
      firebaseApp
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>
