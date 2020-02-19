<template>
  <div>
    <Nav></Nav>
    <div id="login-form">
      <div class="container">
        <div class="row">
            <div class="col-md-12">
                  <div class="wrap">
                    <div id="login-box">
                      <p class="form-title">
                          Login</p>
                      <form class="login">
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="submit" value="Submit" class="btn btn-success btn-sm" />
                      </form>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    <Carousel></Carousel>
  </div>
</template>

<script>
import Nav from '../components/Navbar.vue'
import Carousel from '../components/Carousel.vue'

export default {
  name: 'Name',
  components: {
    Nav,
    Carousel
  }
}
</script>

<style>
body
{
    /* background: url('http://farm3.staticflickr.com/2832/12303719364_c25cecdc28_b.jpg') fixed; */
    /* background-color: navy; */
    background-size: cover;
    padding: 0;
    margin: 0;
}

.wrap
{
    width: 100%;
    height: 80vh;
    /* min-height: 100%; */
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    margin-top: 20vh;
}

p.form-title
{
    font-family: 'Open Sans' , sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    color: rgb(2, 0, 0);
    margin-top: 5%;
    text-transform: uppercase;
    letter-spacing: 4px;
}

form
{
    width: 250px;
    margin: 0 auto;
}

form.login input[type="email"], form.login input[type="password"]
{
    width: 100%;
    margin: 10px 0;
    padding: 5px 10px;
    background: 0;
    border: 0;
    border-bottom: 1px solid black;
    outline: 0;
    font-style: italic;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 5px;
    color:black;
    outline: 0;
}

form.login input[type="submit"]
{
    background-color:grey;
    color: white;
    width: 100%;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    margin: 25px auto;
    outline: 0;
    cursor: pointer;
    letter-spacing: 1px;
    border: none;
}

form.login input[type="submit"]:hover
{
    transition: background-color 0.5s ease;
}
</style>
