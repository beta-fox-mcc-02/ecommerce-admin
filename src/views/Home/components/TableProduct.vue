<template>
  <div>
    <!-- update -->
    <div>
      <b-modal id="modal-2" ref="modal-2-ref" title="Update Product">
        <UpdateProduct :idProduct="idProduct" @closeModal="closeModal" />
        <template v-slot:modal-footer>
          <div class="w-100 h-auto"></div>
        </template>
      </b-modal>
    </div>

    <!-- delete -->
    <div>
      <b-modal id="modal-3" ref="modal-3-ref" title="Delete Product">
        <DeleteProduct :idProduct="idProduct" @closeModal="closeModal" />
        <template v-slot:modal-footer>
          <div class="w-100 h-auto"></div>
        </template>
      </b-modal>
    </div>

    <b-table
      :items="items"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      responsive="sm"
    >
      <template v-slot:cell(Stock)="data">{{printStock(data.value)}}</template>
      <template v-slot:cell(Price)="data">{{printPrice(data.value)}}</template>

      <template v-slot:cell(Image)>
        <a href>
          <i class="fas fa-images"></i> Show
        </a>
      </template>

      <template v-slot:cell(id)="data">
        <a href>
          <i class="fas fa-edit" @click.prevent="updateProduct(data.value)"></i>
        </a> |
        <a href>
          <i class="fas fa-trash-alt" @click.prevent="deleteProduct(data.value)"></i>
        </a>
      </template>
    </b-table>

    <div>
      Sorting By:
      <b>{{ sortBy }}</b>, Sort Direction:
      <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
    </div>
  </div>
</template>

<script>
import UpdateProduct from './UpdateProduct.vue';
import DeleteProduct from './DeleteProduct.vue';

export default {
  data() {
    return {
      sortBy: 'age',
      sortDesc: false,
      fields: [
        { key: 'Name', sortable: true },
        { key: 'Image', sortable: true },
        { key: 'Price', sortable: true },
        { key: 'Stock', sortable: true },
        { key: 'id', label: 'Options' },
      ],
      idProduct: ''
    };
  },
  components: {
    UpdateProduct,
    DeleteProduct
  }
  ,
  methods: {
    fetchData() {
      this.$store.dispatch('fetchProduct')
        .then(({ data }) => {
          this.$store.commit('SET_LOADING', false);
          console.log(data.data);
          this.$store.commit('SET_ITEMS', data.data);
        })
        .catch(({ response }) => {
          this.$store.commit('SET_LOADING', false);
          console.log(response);
        });
    },
    deleteProduct(id) {
      this.$refs['modal-3-ref'].show();
      this.idProduct = id;
    },
    updateProduct(id) {
      console.log(id);
      this.idProduct = id;
      this.$refs['modal-2-ref'].show();
    },
    closeModal() {
      this.$refs['modal-2-ref'].hide();
      this.$refs['modal-3-ref'].hide();
    },
    printStock(value) {
      if (Number(value) === 1)
        return `${value} item`;
      else
        return `${value} items`;
    },
    printPrice(value) {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);
    }
  },
  computed: {
    items() {
      const products = [];
      this.$store.state.items.forEach(el => {
        console.log(el);
        products.push({
          Name: el.name,
          Image: el.image_url,
          Price: el.price,
          Stock: el.stock,
          id: el.id
        });
      });
      return products;
    }
  },
  created() {
    this.fetchData();
  }
}
</script>
