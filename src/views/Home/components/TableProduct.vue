<template>
  <div>
    <b-table
      :items="items"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      responsive="sm"
    >
      <template v-slot:cell(Image)>
        <a href>
          <i class="fas fa-images"></i> Show
        </a>
      </template>

      <template v-slot:cell(Options)>
        <a href>
          <i class="fas fa-edit"></i>
        </a> |
        <a href>
          <i class="fas fa-trash-alt"></i>
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
        { key: 'Options', sortable: false }
      ],
      items: []
    };
  }
}
</script>
