<template>
  <div class="Navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <a class="navbar-brand text-light">Welcome admin</a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              Landing page
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">See products</a>
          </li>
          <li class="nav-item">
            <span
              class="nav-link"
              style="cursor: pointer"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >Upload product</span>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0" @submit.prevent>
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-info my-2 my-sm-0 shadow" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <!-- modal -->
    <div
      class="modal fade"
      id="exampleModalCenter"
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

            <form @submit.prevent=''>
              <div class="form-group">
                <input class="form-control" placeholder="product name" />
              </div>
              <div class="form-group">
                <input class="form-control" placeholder="product price" />
              </div>
              <div class="form-group">
                <input class="form-control" placeholder="product stock" />
              </div>
              <div class="form-group">
                <input class="form-control" placeholder="product image url" />
              </div>
              <div class="form-group">
                <select class="form-control" id="exampleFormControlSelect1">
                  <option value="1">cloth</option>
                  <option value="2">accessories</option>
                  <option value="3">pants</option>
                  <option value="4">jacket</option>
                  <option value="5">suits</option>
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
              >Launch product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   name: 'NavbarAdmin',
   data () {
      return {
         product: {
            name: '',
            image: '',
            price: '',
            stock: '',
            CategoryId: ''
         }
      }
   }
};
</script>

<style>
</style>