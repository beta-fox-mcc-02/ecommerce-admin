<template>
<div>
<a class="btn btn-white" data-toggle="modal" data-target="#registerForm">dont have account yet?</a>
<div class="modal fade" tabindex="-1" role="dialog" id="registerForm">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
                    <label>REGISTER</label>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label >Password</label>
                <input type="password" class="form-control" placeholder="Password">
                <small id="emailHelp" class="form-text text-muted">Password must more than 5 characters.</small>
            </div>
            <button type="submit" class="btn btn-success">Register</button>
          </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
// import axios from 'axios'
export default {

}
</script>

<style>

</style>
