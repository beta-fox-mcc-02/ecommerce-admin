<template>
  <v-navigation-drawer
    v-model="isOpen"
    :clipped="$vuetify.breakpoint.lgAndUp"
    app
  >
  <v-list dense>
    <template v-for="item in items">
      <v-list-group
        v-if="item.children"
        :key="item.text"
        v-model="item.model"
        :prepend-icon="item.model ? item.icon : item['icon-alt']"
        append-icon=""
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </template>
        <router-link exact class="nav-link" :to="child.url" v-for="(child, i) in item.children"
          :key="i">
          <v-list-item link>
            <v-list-item-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ child.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list-group>
          <router-link exact class="nav-link"
            v-else :key="item.name"
            :to="item.url">
            <v-list-item
              link
            >
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
    </template>
  </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Sidebar',
  data: () => ({
    isOpen: true
  }),
  props: {
    drawer: Boolean
  },
  computed: {
    items () {
      return this.$store.state.dashboard.menus
    }
  },
  watch: {
    drawer (value) {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav-link {
    color: inherit !important;
    text-decoration: none;
    display: inline-block;
    width: 100%;
  }
  .router-link-active {
    background: #A9A9A9;
  }
</style>
