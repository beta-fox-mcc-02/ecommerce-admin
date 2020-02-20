<template>
  <div>
    <Navbar></Navbar>
    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Admin Management" active>
            <b-card-text>
              <div>
                <h1>List of Admins</h1>
                <b-table hover :items="items" :fields="fields"></b-table>
              </div>
            </b-card-text>
          </b-tab>
          <b-tab title="Product">
            <b-card-text>Tab contents 2</b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import userAPI from '../API/userAPI';
import store from '../store/index';
import Navbar from '../components/AdminNav.vue';

export default {
  name: 'Admin',
  components: {
    Navbar,
  },
  computed: {
    getPersonData() {
      return this.$store.state.isAdmin;
    },
  },
  data() {
    return {
      fields: [
        {
          key: 'Id',
          sortable: true,
        },
        {
          key: 'email',
          label: 'Email',
          sortable: true,
        },
        {
          key: 'Action',
        },
      ],
      items: [
        { age: 40, email: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, email: 'Larsen', last_name: 'Shaw' },
        { age: 89, email: 'Geneva', last_name: 'Wilson' },
        { age: 38, email: 'Jami', last_name: 'Carney' },
      ],
    };
  },
  beforeRouteEnter(to, from, next) {
    if (localStorage.token) {
      store.commit('setLoading');
      userAPI.get(`/findUser/${localStorage.person_id}`)
        .then((response) => {
          if (response.data.user_role === 'admin') {
            next();
          } else {
            next('/');
          }
        })
        .catch((err) => {
          next('/');
          console.log(err.response);
        })
        .finally(() => {
          store.commit('stopLoading');
        });
    } else {
      next('/');
    }
  },
};
</script>
