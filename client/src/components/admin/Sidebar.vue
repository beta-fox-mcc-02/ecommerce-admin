<template>
  <div class="sidebar_adm">
    <b-menu>
      <b-menu-list label="- - - - - - Admin options - - - - - -">
        <b-menu-item
          icon="settings"
          :active="isActive"
          :expanded="isActive"
          @click="isActive = !isActive"
        >
          <template slot="label" slot-scope="props">
            Manage Options
            <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
          </template>
          <b-menu-item icon="account" label="Manage Users"></b-menu-item>
          <b-menu-item icon="book" label="Manage Products"></b-menu-item>
        </b-menu-item>
      </b-menu-list>
    </b-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  }
}
</script>
