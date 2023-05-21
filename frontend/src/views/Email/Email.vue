<template>
  <div class="email">
    <Header />
    <div class="email__main">
      <form @submit.prevent="sendEmail">
        <h1>Send us an Email.</h1>
        <div class="email__loader" v-if="loading">
          <div />
        </div>
        <input type="text" v-model="title" placeholder="subject" />
        <div>
          <input
            type="text"
            placeholder="your first name(s)"
            v-model="firstName"
          />
          <input type="text" placeholder="your last name" v-model="lastName" />
        </div>
        <textarea v-model="body" placeholder="type your message"></textarea>
        <input type="email" v-model="sender" placeholder="your email address" />
        <input
          type="tel"
          v-model="phoneNumber"
          placeholder="your phone number"
        />
        <p v-if="error" :class="error ? 'email__message--error' : ''">
          {{ error }}
        </p>
        <p v-if="message" :class="message ? 'email__message' : ''">
          {{ message }}
        </p>
        <button type="submit">SEND</button>
      </form>
    </div>
    <Footer />
    <CookiePolicy v-if="cookiesAccepted === false" />
  </div>
</template>

<script>
import { CookiePolicy, Header, Footer } from "../../components";
import { baseUrl } from "../../constants";
export default {
  props: {},
  components: {
    CookiePolicy,
    Header,
    Footer,
  },
  computed: {
    cookiesAccepted() {
      return this.$store?.state?.cookies;
    },
  },

  data() {
    return {
      title: this.$router.history.current.params?.category,
      body: "",
      sender: "",
      error: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      message: "",
      loading: false,
    };
  },
  methods: {
    sendEmail() {
      this.loading = true;
      if (this.title == "") {
        this.message = "";
        this.error = "Email subject is required.";
        this.loading = false;
        return;
      }
      if (this.firstName == "") {
        this.loading = false;
        this.message = "";
        this.error = "First Name(s) is required.";
        return;
      }
      if (this.lastName == "") {
        this.message = "";
        this.error = "Last Name is required.";
        this.loading = false;
        return;
      }
      if (this.body.length < 10) {
        this.message = "";
        this.loading = false;
        this.error = "The email body must have at least 10 characters.";
        return;
      }
      if (this.sender == "") {
        this.loading = false;
        this.message = "";
        this.error = "Please enter your email address.";
        return;
      }

      if (this.phoneNumber == "") {
        this.message = "";
        this.loading = false;
        this.error = "Your Phone Number is required.";
        return;
      }
      this.message = "";
      this.error = "";

      (async () => {
        this.loading = true;
        await fetch(`${baseUrl}/api/v1/send-email`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subject: this.title,
            body: this.body,
            from: this.sender,
            firstName: this.firstName,
            lastName: this.lastName,
            phoneNumber: this.phoneNumber,
          }),

          method: "POST",
        })
          .then((res) => res.json())
          .then((d) => {
            this.loading = false;
            if (d.code == 500) {
              this.message = "";
              this.error = d.message;
            } else {
              this.error = "";
              this.message = d.message;
            }
          })
          .catch((error) => {
            this.loading = false;
            this.error = error.message;
          });
      })();
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
      position: relative;
      .email__loader {
        position: absolute;
        top: 0;
        height: 100%;
        right: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 100;
        div {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 3px solid lightgray;
          border-top: 3px solid #42b983;
          border-right: 3px solid cornflowerblue;
          animation: loading 1s ease 0s infinite;
        }
      }
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
      div {
        width: 100%;
        display: flex;
        margin: 5px auto;
      }
      input,
      textarea,
      div > input {
        border: 1px solid cornflowerblue;
        outline: none;
        padding: 5px;
        resize: none;
        border-radius: 5px;
      }
      div > input {
        flex: 1;
      }
      div > input:first-of-type {
        margin-right: 5px;
      }
      input:last-of-type {
        margin-top: 5px;
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
        background-color: #42b983;
        width: 100%;
        color: white;
        padding: 5px;
        border-radius: 5px;
        text-align: center;
      }
      .email__message--error {
        background-color: red;
      }
      .email__message {
      }
    }
  }
}

@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
