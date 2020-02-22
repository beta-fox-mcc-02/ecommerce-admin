<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click="$emit('close')">
        <div class="modal-container" @click.stop>
          <div class="card z-depth-3">
            <div class="card-content center">
              <span class="card-title">Registration</span>
              <form id="regis-form" @submit.prevent="register">
                <!-- username -->
                <div class="row">
                  <div class="input-field col s12">
                    <i class="material-icons prefix">account_box</i>
                    <input class="validate" id="username" type="text" required v-model="username">
                    <label for="username">Username</label>
                  </div>
                </div>
                <!-- email -->
                <div class="row">
                  <div class="input-field col s12">
                    <i class="material-icons prefix">email</i>
                    <input class="validate" id="emailRegis" type="email" required v-model="email">
                    <label for="username">Email</label>
                  </div>
                </div>
                <!-- password -->
                <div class="row">
                  <div class="input-field col s12">
                    <i class="material-icons prefix">security</i>
                    <input class="validate" id="passwordRegis" type="password" required v-model="password">
                    <label for="password">Password</label>
                  </div>
                </div>
                <!-- role -->
                <div class="row">
                  <div class="input-field col s12">
                    <select id="role" v-model="role">
                      <option value="true">Admin</option>
                      <option value="false">User</option>
                    </select>
                    <label for="role">Role</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col s12 center">
                    <button class="btn blue accent-4 waves-effect" type="submit" name="action" @click="$emit('close')">Register</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'RegisterForm',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      role: ''
    }
  },
  methods: {
    register () {
      const payload = {
        username: this.username,
        email: this.email,
        password: this.password,
        role: this.role
      }
      console.log(payload)
      this.$store.dispatch('createUser', payload)
    }
  },
  props: {
    modalId: String
  }
}
</script>

<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
transition: opacity 0.5s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 50rem;
  margin: 0px auto;
}
</style>
