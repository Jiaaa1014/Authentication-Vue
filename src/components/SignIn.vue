<template>
  <div class="">
    <h2>Sign In</h2>
    <div class="form-group">
      <input
        type="text"
        placeholder="email"
        class="form-control"
        v-model="email"/>
        </div>
        <div class="form-group">
      <input
        type="password"
        placeholder="password"
        class="form-control"
        v-model="password"/>
      <button class='entrybtn btn btn-outline-success' @click="signIn">GO</button>
    </div>
    <br>
    <router-link to="/signup">Sign Up instead</router-link>
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
    signIn() {
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>
