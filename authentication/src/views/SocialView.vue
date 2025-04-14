<template>
  <h3>Social Login</h3>
  <button @click="loginGoogle">Login with Google</button>
  <button @click="loginFacebook">Login with Facebook</button>
  <button @click="loginTwitter">Login with Twitter</button>
  <button @click="loginGithub">Login with GitHub</button>
</template>

<script lang="ts" setup>
import {
  GithubAuthProvider,
  TwitterAuthProvider,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
} from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth();

const loginGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      alert("Success");
    })
    .catch((error) => {
      alert("login Failed!!");
    });
};

const loginFacebook = () => {
  signInWithPopup(auth, facebookProvider)
    .then((result) => {
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      alert("Success");
    })
    .catch((error) => {
      alert("login Failed!!");
    });
};

const loginTwitter = () => {
  signInWithPopup(auth, twitterProvider)
    .then((result) => {
      const credential = TwitterAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      alert("Success");
    })
    .catch((error) => {
      alert("login Failed!!");
    });
};

const loginGithub = () => {
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      alert("Success");
    })
    .catch((error) => {
      alert("login Failed!!");
    });
};
</script>
