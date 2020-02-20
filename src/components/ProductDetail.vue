<template>
  <div class="mt-5">
    <div id="content">
      <div class="container mt-5 mb-5">
        <div class="row">
          <div class="col">
            <img id="image-card" :src="product.image_url" alt="Product image" />
          </div>
          <div class="col-lg-6 justify-content-center flex-row align-self-center">
            <div class="container">
              <div class="row border-bottom">
                <div class="col-4 text-left">
                  <h4>Name</h4>
                </div>
                <div class="col-8 text-left product-name mb-3">
                  <h3>{{ product.name }}</h3>
                </div>
              </div>
              <div class="row border-bottom mt-3">
                <div class="col-4 text-left">
                  <h6>Price</h6>
                </div>
                <div class="col-8 text-left">
                  <p>{{ product.price }}</p>
                </div>
              </div>
              <div class="row border-bottom mt-3">
                <div class="col-4 text-left">
                  <h6>Stock</h6>
                </div>
                <div class="col-8 text-left">
                  <p>{{ product.stock }}</p>
                </div>
              </div>
              <div class="row border-bottom mt-3">
                <div class="col-4 text-left">
                  <h6>Category</h6>
                </div>
                <div class="col-8 text-left">
                  <p>{{ product.Category.tag }}</p>
                </div>
              </div>
              <div class="row my-4" style="display: flex; justify-content: flex-end">
                <button
                  class="btn btn-secondary mx-2"
                  data-toggle="modal"
                  data-target="#editProduct"
                >
                  <i class="fas fa-pencil-alt"></i>
                </button>
                <button class="btn btn-dark mx-2" @click="deleteProduct">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- modal -->
    <div
      class="modal fade"
      id="editProduct"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">Upload product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <input class="form-control" placeholder="product name" v-model="product.name" />
              </div>
              <div class="form-group">
                <input class="form-control" placeholder="product price" v-model="product.price" />
              </div>
              <div class="form-group">
                <input class="form-control" placeholder="product stock" v-model="product.stock" />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  placeholder="product image url"
                  v-model="product.image_url"
                />
              </div>
              <div class="form-group">
                <select
                  class="form-control"
                  id="exampleFormControlSelect1"
                  v-model="product.CategoryId"
                >
                  <option value="1">cloth</option>
                  <option value="2">accessories</option>
                  <option value="3">pants</option>
                  <option value="4">jacket</option>
                  <option value="5">suits</option>
                  <option value="6">dress</option>
                </select>
                <small class="text-muted ml-2">
                  <i>Select category for this product</i>
                </small>
              </div>
              <button
                type="submit"
                class="btn btn-info shadow"
                style="margin-left: 165px;"
                data-dismiss="modal"
                @click.prevent="submitEditProduct"
              >Submit change</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../api/axiosInstance";
export default {
  name: "ProductDetail",
  data() {
    return {
      product: ""
    };
  },
  methods: {
    getProduct() {
      axios({
        method: `GET`,
        url: `/products/${this.$route.params.productId}`,
        headers: {
          token: localStorage.getItem("token")
        }
      })
        .then(({ data }) => {
          this.product = data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteProduct() {
      axios({
        method: "DELETE",
        url: `/products/${this.$route.params.productId}`,
        headers: {
          token: localStorage.getItem("token")
        }
      })
        .then(({ data }) => {
          Toastify({
            text: `Product with id ${this.$route.params.productId} has been deleted`,
            backgroundColor: "linear-gradient(to right, #DA22FF, #9733EE)",
            className: "info"
          }).showToast();

          this.$router.push("/admin");
        })
        .catch(err => {
          console.log(err);
        });
    },
    submitEditProduct() {
      axios({
        method: "PUT",
        url: `/products/${this.$route.params.productId}`,
        data: {
          name: this.product.name,
          image_url: this.product.image_url,
          price: this.product.price,
          stock: this.product.stock,
          CategoryId: this.product.CategoryId
        },
        headers: {
          token: localStorage.getItem("token")
        }
      })
        .then(({ data }) => {
          console.log(data, `updated dataaaaaaaaaaaaaa`);
          this.getProduct();
          Toastify({
            text: "updated successfully!",
            backgroundColor: "linear-gradient(to right, #DA22FF, #9733EE)",
            className: "info"
          }).showToast();
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getProduct();
  }
};
</script>

<style scoped>
#image-card {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 230px;
  min-height: 300px;
  width: auto;
  height: auto;
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px #222);
  transition: transform 0.5s;
  overflow: hidden;
}

#image-card:hover {
  transform: scale(1.2);
}
</style>