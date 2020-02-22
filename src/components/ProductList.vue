<template>
  <div>
    <div class="main-container">
      <b-button variant="outline-primary" @click="changePage('add')">Add new product</b-button>
      <b-button variant="outline-primary" @click="registerForm">Register new admin</b-button>
      <table border="1" id="products">
        <tr>
          <th>No</th>
          <th>Prouct name</th>
          <th>Image</th>
          <th>Price</th>
          <th>Stocks</th>
          <th>Action</th>
        </tr>
        <tbody v-for="(products, i) in $store.state.product" :key="products.id">
          <tr>
            <td>{{ i + 1 }}</td>
            <td>{{ products.name }}</td>
            <td>
              <img
                :src="`${products.image_url}`"
                alt="img"
                class="table-image"
              />
            </td>
            <td>Rp. {{ products.price }}</td>
            <td>{{ products.stocks }}</td>
            <td>
              <b-button variant="danger" href="#" @click="deleteProduct(products.id)">
                Delete
              </b-button>
              <b-button variant="success" href="#" @click="findOne(products.id)" v-b-modal.editForm>
                Edit
              </b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- <AddProduct @fetchAll="fetchAll" @changePage="changePage" @click="changePage(`add`)" />

    <UpdateForm @fetchAll="fetchAll" @changePage="changePage" />-->

    <b-modal id="editForm" @ok="handleOk">
      <b-form @submit.prevent="updateProduct">
        <b-input type="text" name="name" v-model="name" /> <br />
        <b-input type="text" name="image_url" v-model="image_url" /> <br />
        <b-input type="text" name="price" v-model="price" /> <br />
        <b-input type="text" name="stocks" v-model="stocks" /> <br />
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
// console.log(axios, " <<");
export default {
  name: "ProductList",
  data() {
    return {
      id: '',
      name: '',
      image_url: '',
      price: '',
      stocks: ''
    };
  },
  methods: {
    fetchAll() {
      this.$store
        .dispatch("fetch")
        .then(response => {
          this.$store.commit("resetProduct");
          response.data.forEach(product => {
            this.$store.commit("setProduct", product);
          });
        })
        .catch(err => console.log(err));
    },
    deleteProduct(id) {
      axios({
        method: "delete",
        url: `http://localhost:3000/admin/product/${id}/delete`
      })
        .then(data => {
          this.fetchAll();
        })
        .catch(err => {
          console.log(err);
        });
    },
    findOne(id) {
      axios({
        method: "get",
        url: `http://localhost:3000/admin/product/${id}/update`
      })
        .then(data => {
          console.log(data.data);
          this.id = data.data.id;
          this.name = data.data.name;
          this.image_url = data.data.image_url;
          this.price = data.data.price;
          this.stocks = data.data.stocks;
        })
        .catch(err => {
          console.log(err);
        });
    },
    updateProduct() {
      let id = this.id;
      axios({
        method: "put",
        url: `http://localhost:3000/admin/product/${id}/update`,
        data: {
          name: this.name,
          image_url: this.image_url,
          price: this.price,
          stocks: this.stocks
        }
      })
        .then(data => {
          this.$nextTick(() => {
            this.$bvModal.hide('editForm')
          })
          this.fetchAll();
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault()
      this.updateProduct()
    },
    registerForm() {
      this.$router.push("/register");
    },
    changePage(change) {
      this.$router.push(change);
    }
  },
  created() {
    if (localStorage.access_token) {
      this.fetchAll();
    } else {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.main-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}

#products {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#products td,
#products th {
  border: 1px solid #ddd;
  padding: 8px;
}

#products tr:nth-child(even) {
  background-color: #f2f2f2;
}

#products tr:hover {
  background-color: #ddd;
}

#products th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgb(15, 104, 177);
  color: white;
}

.table-image {
  height: 60px;
  width: 80px;
}
</style>
