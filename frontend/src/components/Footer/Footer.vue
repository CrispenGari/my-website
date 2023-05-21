<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__iterm">
        <h1>Social Media</h1>
        <div class="footer__social">
          <a href="https://www.facebook.com/crispen.gari">
            <v-icon class="footer__social__facebook"> mdi-facebook </v-icon>
          </a>
          <a href="https://www.linkedin.com/in/crispen-gari-34437720b/">
            <v-icon class="footer__social__linkedin"> mdi-linkedin </v-icon>
          </a>
          <a href="https://twitter.com/crispengari_">
            <v-icon class="footer__social__twitter"> mdi-twitter </v-icon>
          </a>
          <a href="https://www.instagram.com/crispen_gari_/">
            <v-icon class="footer__social__instagram"> mdi-instagram </v-icon>
          </a>
          <a href="https://github.com/CrispenGari">
            <v-icon class="footer__social__github"> mdi-github </v-icon>
          </a>
        </div>
      </div>
      <div class="footer__iterm">
        <h1>Contacts</h1>
        <div>
          <span>Phone</span>
          <p>
            <span>+27 652 305 879</span>
            <span>+27 684 671 609</span>
            <!-- <span>+27 652 305 879</span> 
            <span>+27 652 305 879</span> -->
          </p>
        </div>
        <p><span>Email</span><span>Crispengari@gmail.com</span></p>
      </div>
    </div>

    <p>
      This is a web site created, owned and mantained by
      <strong>Crispen Gari</strong>.
    </p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background: black;
  color: white;
  padding: 10px 10px 20px 10px;
  .footer__container {
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .footer__iterm {
      border-bottom: 1px solid lightgray;
      width: 100%;
      max-width: 300px;
      h1 {
        color: white;
        width: 100%;
        letter-spacing: 1px;
        font-weight: 500;
        padding: 5px 0;
        border-bottom: 1px solid lightgray;
        user-select: none;
        text-transform: uppercase;
      }
      p,
      div {
        display: flex;
        width: 100%;
        justify-content: space-between;
        color: white;
        span {
          color: white;
          user-select: none;
        }
        p {
          display: flex;
          flex-direction: column;
          span {
            color: cornflowerblue;
            user-select: all;
            align-self: flex-end;
          }
        }
      }
      .footer__social {
        z-index: 10;
        display: flex;
        align-items: center;
        padding: 20px 0;
        a {
          text-decoration: none !important;
          margin: 5px;
        }
        .footer__social__facebook {
          color: #2ba5da;
          cursor: pointer;
          font-size: 30px;
        }
        .footer__social__twitter {
          color: #2ba5da;
          cursor: pointer;
          font-size: 30px;
        }
        .footer__social__linkedin {
          color: #0073b1;
          cursor: pointer;
          font-size: 30px;
        }
        .footer__social__instagram {
          color: #dd0f26;
          cursor: pointer;
          font-size: 30px;
        }
        .footer__social__github {
          color: #24292e;
          cursor: pointer;
          font-size: 30px;
        }
      }
    }
  }

  p {
    color: white !important;
    letter-spacing: 1px;
    text-align: center;
    margin-top: 20px;
    strong {
      color: white;
      letter-spacing: 1px;
    }
    user-select: none;
  }
  .footer__iterm > p > span:first-child {
    color: white;
    user-select: none;
  }
  .footer__iterm > p > span:last-child {
    color: #0073b1 !important;
    cursor: pointer;
    user-select: all;
  }
}
</style>
