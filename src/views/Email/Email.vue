<template>
  <div class="email">
    <Header />
    <div class="email__main">
      <form @submit.prevent="sendEmail">
        <h1>Send us an Email.</h1>
        <input type="text" v-model="title" placeholder="subject" />
        <textarea v-model="body" placeholder="type your message"></textarea>
        <input type="email" v-model="sender" placeholder="your email address" />
        <p :class="error ? 'email__message--error' : 'email__message'">
          {{ error }}
        </p>
        <button type="submit">SEND</button>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import { Header, Footer } from "../../components";
export default {
  props: {},
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      title: this.$router.history.current.params?.category,
      body: "",
      sender: "",
      error: "",
    };
  },
  methods: {
    sendEmail() {
      if (this.title == "") {
        this.error = "Email subject is required.";
        return;
      }
      if (this.body.length < 30) {
        this.error = "The email body must have at least 30 characters.";
        return;
      }
      if (this.sender == "") {
        this.error = "Please enter your email address.";
        return;
      }
      this.error = "";
      console.log({
        title: this.title,
        body: this.body,
        sender: this.sender,
        error: this.error,
      });
      //   this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">
.email {
  .email__main {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 60vh;
    form {
      padding: 10px;
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 400px;
      margin: auto;
      h1 {
        width: 100%;
        padding: 10px;
        text-align: center;
        letter-spacing: 2px;
        font-size: 0.9rem;
        text-transform: uppercase;
        user-select: none;
        position: sticky;
        top: 0;
        z-index: 10;
        background: white;
      }
      input,
      textarea {
        border: 1px solid cornflowerblue;
        outline: none;
        padding: 5px;
        resize: none;
        border-radius: 5px;
      }
      textarea {
        margin: 10px 0;
        height: 200px;
      }
      button {
        margin: 10px auto;
        padding: 5px;
        background: cornflowerblue;
        cursor: pointer;
        color: white;
        border-radius: 5px;
        width: 100%;
        &:hover {
          background: #42b983;
        }
      }
      .email__message,
      .email__message--error {
        margin: 10px auto;
        user-select: none;
        color: #42b983;
      }
      .email__message--error {
        color: red;
        font-style: italic;
      }
    }
  }
}
</style>
