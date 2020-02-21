<template>
  <section>
    <div id="admin-cards-header">
      <a class="fas fa-user-plus" style="cursor: pointer;" v-on:click="changeMode"></a>
      <div class="header-desc">Add new employee</div>
      <div id="add-admin" v-if="addMode">
        <i class="far fa-window-close" v-on:click="close" style="float: right; font-size: 15pt; cursor: pointer"></i>
        <form v-on:submit.prevent="add">
          <div class="inputs">
            <div class="inputs2nd">
              <input type="email" v-model="email"><br>
              <i v-if="unfilledField" class="fas fa-exclamation-circle"></i>
            </div>
            <small>email</small>
          </div>
          <div class="inputs">
            <div class="inputs2nd">
              <input type="password" v-model="password"><br>
              <i v-if="unfilledField" class="fas fa-exclamation-circle"></i>
            </div>
            <small>password</small>
          </div>
          <div class="button">
            <button type="submit" id="add-btn">Add</button>
          </div>
        </form>
      </div>
    </div>
    <div id="administrator-list" v-for="admin of admins" v-bind:key="admin.id">
      <div class="admincards-container">
        <input type="checkbox">
        <div class="adminbox-id">{{ admin.id }}</div>
        <div class="adminbox-email">{{ admin.email }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      addMode: false,
      unfilledField: false
    }
  },
  computed: {
    admins () {
      return this.$store.state.admins
    },
    email: {
      get () { return this.$store.state.email },
      set (value) { this.$store.commit('setEmail', value) }
    },
    password: {
      get () { return this.$store.state.password },
      set (value) { this.$store.commit('setPassword', value) }
    }
  },
  methods: {
    getAdmins () {
      this.$store.dispatch('fetchAdmins')
        .then((result) => {
          this.$store.commit('getAdmins', result.data.admins)
        })
        .catch((err) => console.log(err))
    },
    changeMode () {
      this.addMode = true
    },
    add () {
      this.$store.dispatch('createAdminAsync')
        .then((result) => {
          if (result) {
            this.getAdmins()
            this.close()
          } else this.unfilledField = true
        })
        .catch((err) => console.log(err))
    },
    close () {
      this.$store.commit('unsetAll')
      this.addMode = false
    }
  },
  created () {
    this.getAdmins()
  }
}
</script>

<style scoped>

section{
    margin-left: 23vw;
    margin-top: 1rem;
}

#admin-cards-header {
  display: flex;
  position: relative;
  align-items: center;
}

div#administrator-list {
    background-color: whitesmoke;
    width: 40vw;
    height: 70vh;
    min-height: 25rem;
    padding: 1rem;
    margin: 1rem 0;
    box-shadow: 0 0 0.5rem #c5c5c5;
}

.header-desc {
    width: 12rem;
    font-weight: bold;
    padding: 0.6rem;
    border-radius: 0 0.6rem 0.6rem 0;
}

#admin-cards-header:hover .header-desc{
  background-color: #efefef;
  animation: fade-in 1s
}

a.fas.fa-user-plus {
  padding: 0.7rem;
  background-color: #171717;
  color: white;
  border-radius: 0.6rem 0 0 0.6rem;
}

#add-admin {
  position: absolute;
  top: 3rem;
  background-color: #189a18ad;
  width: 20rem;
  height: 11rem;
  display: flex;
}

form {
  width: 75%;
  margin: auto;
}

.inputs {
  background-color: white;
  margin: 0.3rem 0;
  padding: 0.2rem;
}

.inputs2nd{
  display: flex;
  align-items: center;
}

input[type="email"], input[type="password"] {
  outline: 0;
  border-style: none;
  font-size: 15pt;
  border-bottom: 0.1rem solid #62ba62;
  width: 80%;
}

.admincards-container {
    display: flex;
    padding: 0.5rem;
    color: white;
    font-size: 15pt;
    font-family: monospace;
    align-items: center;
    margin: 0.3rem 0;
    background-color: #189a18;
    border-radius: 1rem;
}

.adminbox-id {
    margin: 0.2rem 0.5rem;
    padding: 0.1rem 0.5rem;
    width: 5%;
    text-align: center;
    font-family: none;
    border-right: 0.1rem dashed #f5f5f5;
}

.adminbox-email {
    margin-left: 2rem;
}

i.fas.fa-exclamation-circle {
  color: red;
  margin-left: 1rem;
  animation: bounce-in 1s infinite;
}

@keyframes bounce-in {
  0%{
    opacity: 0;
    transform: scale(0);
  }
  50%{
    opacity: 1;
    transform: scale(1.5);
  }
  100%{
    opacity: 0.5;
    transform: scale(0.5);
  }
}

@keyframes fade-in {
  0%{
    opacity: 0;
    transform: scaleX(0)
  }
  100%{
    opacity: 1;
    transform: scaleX(1)
  }
}

</style>
