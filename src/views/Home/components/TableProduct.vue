<template>
  <div>
    <b-table
      :items="items"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      responsive="sm"
    >
      <!-- <template v-slot:cell(id)="data"></template> -->

      <template v-slot:cell(Image)>
        <a href>
          <i class="fas fa-images"></i> Show
        </a>
      </template>

      <template v-slot:cell(id)="data">
        <a href>
          <i class="fas fa-edit" @click.prevent="editProduct(data.value)"></i>
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
      ]
    };
  },
  methods: {
    fetchData() {
      this.$store.dispatch('fetchProduct')
        .then(({ data }) => {
          console.log(data.data);
          this.$store.commit('SET_ITEMS', data.data);
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    deleteProduct(id) {
      this.$store.dispatch('deleteProduct', id)
        .then(() => {
          return this.$store.dispatch('fetchProduct');
        })
        .then(({ data }) => {
          console.log(data.data);
          this.$store.commit('SET_ITEMS', data.data);
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    updateProduct(id) {
      console.log(id);
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
