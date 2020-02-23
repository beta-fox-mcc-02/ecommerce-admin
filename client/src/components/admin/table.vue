<template>
  <div class="table_adm">
    <section>
      <Create/>
      <label style="font-size: 50px; margin-left: 250px;">
        <strong>List Products</strong>
      </label>
      <b-tabs>
        <b-tab-item label="Table">
          <b-table
              :data="listProducts"
              :columns="columns"
              :selected.sync="selected"
              focusable
              @click="clearSelected">
          </b-table>
        </b-tab-item>
        <b-tab-item label="Selected" v-if="selected">
          <Edit :payload="selected" />
          <b-button type="is-danger" @click="deletedData">
            <b-icon icon="delete-circle"></b-icon>
            <span>Delete Product</span>
          </b-button>
          <pre>{{ selected }}</pre>
        </b-tab-item>
      </b-tabs>
    </section>
  </div>
</template>

<script>
import Create from './Create.vue'
import Edit from './edit.vue'
export default {
  data () {
    return {
      selected: null,
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '40',
          numeric: true
        },
        {
          field: 'name',
          label: 'Name'
        },
        {
          field: 'author',
          label: 'Author'
        },
        {
          field: 'image_url',
          label: 'Image Url'
        },
        {
          field: 'price',
          label: 'Price'
        },
        {
          field: 'stock',
          label: 'Stock'
        }
      ]
    }
  },
  methods: {
    fetchData () {
      this.$store.dispatch('fetchProduct')
    },
    clearSelected () {
      this.selected = null
    },
    deletedData () {
      const payload = {
        id: this.selected.id
      }
      this.$buefy.dialog.confirm({
        title: 'Deleting Product',
        message: 'Are you sure you want to <b>delete</b> this product? This action will delete this product permanently',
        confirmText: 'Delete Product',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => {
          this.$store.dispatch('fetchDelete', payload)
            .then(({ data }) => {
              this.$store.dispatch('fetchProduct')
              this.$buefy.toast.open({
                duration: 5000,
                message: data.message,
                position: 'is-top',
                type: 'is-success'
              })
            })
            .catch(err => {
              this.$buefy.toast.open({
                duration: 10000,
                message: err.response.data.message,
                position: 'is-top',
                type: 'is-danger'
              })
            })
          this.clearSelected()
        }
      })
    }
  },
  created () {
    this.fetchData()
    this.products = this.$store.state.products
  },
  computed: {
    listProducts () {
      return this.$store.state.products.data
    }
  },
  components: {
    Create,
    Edit
  }
}
</script>
