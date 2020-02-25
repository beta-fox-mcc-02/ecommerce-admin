<template>
<div id="wrapper">
  <nav
    class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion
    bg-gradient-primary p-0">
    <div class="container-fluid d-flex flex-column p-0">
      <a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
        href="#">
        <div class="sidebar-brand-icon rotate-n-15"><i class="fas fa-square-root-alt"></i></div>
        <div class="sidebar-brand-text mx-3"><span style="font-size: 16px;">e-commerce</span>
        </div>
      </a>
      <hr class="sidebar-divider my-0">
      <ul class="nav navbar-nav text-light" id="accordionSidebar">
        <li class="nav-item" role="presentation"><a class="nav-link" href="index.html"><i
              class="fas fa-tachometer-alt"></i><span>Dashboard</span></a></li>
        <li class="nav-item" role="presentation">
          <router-link class="nav-link" to="/dashboard/list"><i
              class="fas fa-table"></i><span>Products</span></router-link></li>
        <li class="nav-item" role="presentation"><router-link class="nav-link" to="add"><i
              class="fas fa-window-maximize"></i><span>Add new product</span></router-link></li>
      </ul>
      <div class="text-center d-none d-md-inline"><button class="btn rounded-circle border-0"
          id="sidebarToggle" type="button"></button></div>
    </div>
  </nav>
  <div class="d-flex flex-column" id="content-wrapper">
    <div id="content">
      <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
        <div class="container-fluid"><button class="btn btn-link d-md-none rounded-circle mr-3"
            id="sidebarToggleTop" type="button"><i class="fas fa-bars"></i></button>
          <form
    class="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div class="input-group"><input class="bg-light form-control border-0 small" type="text"
                placeholder="Search for ...">
              <div class="input-group-append"><button class="btn btn-primary py-0" type="button"><i
                    class="fas fa-search"></i></button></div>
            </div>
          </form>
          <ul class="nav navbar-nav flex-nowrap ml-auto">
            <li class="nav-item dropdown d-sm-none no-arrow"><a class="dropdown-toggle nav-link"
                data-toggle="dropdown" aria-expanded="false" href="#"><i
                  class="fas fa-search"></i></a>
              <div class="dropdown-menu dropdown-menu-right p-3 animated--grow-in" role="menu"
                aria-labelledby="searchDropdown">
                <form class="form-inline mr-auto navbar-search w-100">
                  <div class="input-group"><input class="bg-light form-control border-0 small"
                      type="text" placeholder="Search for ...">
                    <div class="input-group-append"><button class="btn btn-primary py-0"
                        type="button"><i class="fas fa-search"></i></button></div>
                  </div>
                </form>
              </div>
            </li>
            <li class="nav-item dropdown no-arrow mx-1" role="presentation"></li>
            <li class="nav-item dropdown no-arrow mx-1" role="presentation">
              <div class="shadow dropdown-list dropdown-menu dropdown-menu-right"
                aria-labelledby="alertsDropdown"></div>
            </li>
            <div class="d-none d-sm-block topbar-divider"></div>
            <li class="nav-item dropdown no-arrow" role="presentation">
              <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link"
                  data-toggle="dropdown" aria-expanded="false" href="#"><span
                    class="d-none d-lg-inline mr-2 text-gray-600 small">Menu</span><img
                    class="border rounded-circle img-profile"
                    src="assets/img/avatars/avatar1.jpeg"></a>
                <div class="dropdown-menu shadow dropdown-menu-right animated--grow-in" role="menu">
                  <a class="dropdown-item" role="presentation" href="#"><i
                      class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Profile</a><a
                    class="dropdown-item" role="presentation" href="#"><i
                      class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Settings</a>
                  <a class="dropdown-item" role="presentation" href="#"><i
                      class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Activity log</a>
                  <div class="dropdown-divider"></div><a class="dropdown-item" role="presentation"
                    href="#"><i
                    class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Logout</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <!-- TEMPAT CONTEN NESTED ROUTE -->
      <div class="container-fluid">
        <div class="row">
          <div class="col-1"></div>
          <div class="col-10">
            <router-view> </router-view>
          </div>
          <div class="col-1"></div>
        </div>
      </div>
    </div>
    <footer class="bg-white sticky-footer">
      <div class="container my-auto">
        <div class="text-center my-auto copyright"><span>Copyright © Brand 2019</span></div>
      </div>
    </footer>
  </div><a class="border rounded d-inline scroll-to-top" href="#page-top"><i
      class="fas fa-angle-up"></i></a>
</div>
</template>

<script>
// import ProductList from '@/components/ProductList.vue';

export default {
  components: {
    // ProductList,
  },
};
</script>
