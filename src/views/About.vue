<template>
  <div>
    <b-table small :fields="fields" :items="items" responsive="sm">
      <!-- A virtual column -->
      <template v-slot:cell(index)="data">{{ data.index + 1 }}</template>

      <!-- A custom formatted column -->
      <template v-slot:cell(name)="data">
        <b class="text-info">{{ data.value.last.toUpperCase() }}</b>,
        <b>{{ data.value.first }}</b>
        <b-button size="sm">{{ data.value.first }}</b-button>
      </template>

      <!-- A virtual composite column -->
      <template v-slot:cell(action)="data">
        <b-img right :src="data.value" alt="Right image" thumbnail fluid width="100px"></b-img>
        <!-- <b-button size="sm">{{ data.value}}</b-button> -->
      </template>

      <!-- Optional default data cell scoped slot -->
      <template v-slot:cell()="data">
        <i>{{ data.value }}</i>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/11/5/9181241/9181241_f0cda4c2-bebe-4353-8412-946ce1eb1b79_457_443.jpg',
      fields: [
        // A virtual column that doesn't exist in items
        'index',
        // A column that needs custom formatting
        { key: 'name', label: 'Full Name', sortable: true },
        // A regular column
        'age',
        // A regular column
        'sex',
        // A virtual column made up from two fields
        'action',
      ],
      items: [
        { name: { first: 'John', last: 'Doe' }, sex: 'Male', age: 42, action: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/11/5/9181241/9181241_f0cda4c2-bebe-4353-8412-946ce1eb1b79_457_443.jpg' },
        { name: { first: 'Jane', last: 'Doe' }, sex: 'Female', age: 36, action: 'delete' },
        { name: { first: 'Rubin', last: 'Kincade' }, sex: 'Male', age: 73, action: 'delete' },
        { name: { first: 'Shirley', last: 'Partridge' }, sex: 'Female', age: 62, action: 'delete' }
      ]
    }
  }
}
</script>
