<template>
  <div id="app">
    <vs-navbar type="gradient" v-model="activeItem" class="nabarx">
      <vs-button @click="active=!active" type="flat" radius="50%" icon="menu"></vs-button>

      <vs-navbar-title>
        MiMi's Movies
      </vs-navbar-title>

      <vs-spacer></vs-spacer>

      <vs-navbar-item index="0">
        <a href="#">Explore</a>
      </vs-navbar-item>
      <vs-navbar-item v-if="signedIn" index="1">
        <a href="#">My Movies</a>
      </vs-navbar-item>
      <vs-navbar-item v-if="signedIn" index="2">
        <a href="#">Add Movies</a>
      </vs-navbar-item>
      <vs-navbar-item v-if="signedIn" index="3">
        <a href="#" @click="signOut">Sign Out</a>
      </vs-navbar-item>
      <vs-navbar-item v-else index="3">
        <a href="#">Sign In</a>
      </vs-navbar-item>
    </vs-navbar>
    <router-view/>
    <vs-sidebar parent="body" default-index="1"  color="primary" class="sidebarx" spacer v-model="active">

      <div class="header-sidebar" slot="header">
        <vs-avatar  size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>

        <h4>
          My Name
          <vs-button color="primary" icon="more_horiz" type="flat"></vs-button>
        </h4>

      </div>

      <vs-sidebar-item index="1" icon="question_answer">
        Dashboard
      </vs-sidebar-item>

      <vs-sidebar-item index="2" icon="gavel">
        History
      </vs-sidebar-item>

      <vs-divider icon="person" position="left">
        User
      </vs-divider>

      <vs-sidebar-item index="3" icon="verified_user">
        Configurations
      </vs-sidebar-item>
      <vs-sidebar-item index="4" icon="account_box">
        Perfile
      </vs-sidebar-item>
      <vs-sidebar-item index="5" >
        Card
      </vs-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <vs-button icon="reply" color="danger" type="flat">log out</vs-button>
        <vs-button icon="settings" color="primary" type="border"></vs-button>
      </div>

    </vs-sidebar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      active: false,
      activeItem: 3,
    };
  },
  computed: {
    signedIn() {
      return (localStorage.signedIn);
    },
  },
  methods: {
    signOut() {
      this.$http.secured.delete('/signin')
        .then(() => {
          delete localStorage.csrf;
          delete localStorage.signedIn;
          this.$router.replace('/');
        })
        .catch(error => this.setError(error, 'Cannot sign out'));
    },
  },
};
</script>

<style lang="stylus">
.header-sidebar
  display flex
  align-items center
  justify-content center
  flex-direction column
  width 100%
  h4
    display flex
    align-items center
    justify-content center
    width 100%
    > button
      margin-left 10px
.footer-sidebar
  display flex
  align-items center
  justify-content space-between
  width 100%
  > button
      border 0px solid rgba(0,0,0,0) !important
      border-left 1px solid rgba(0,0,0,.07) !important
      border-radius 0px !important
</style>
