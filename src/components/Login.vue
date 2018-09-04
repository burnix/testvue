<template>
    <div class="center-align full-height">
        <ul>
            <li>
                <div class="container">
                    <div class="input-field col s6">
                    <input id="Login" name="Login" type="text" v-model="login" />
                    <label for="Login">Login</label>
                </div>
                </div>
            </li>
            <li>
                <div class="container">
                        <div class="input-field col s6">
                            <input id="Password" name="Password" type="password"  v-model="password" />
                            <label for="Password">Password</label>
                        </div>
                </div>
               
            </li>
            <a class="waves-effect waves-light btn" v-on:click="greet">Login</a>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      login: "",
      password: ""
    };
  },

  methods: {
    greet: function(event) {
      if (this.login == "Tiramisu" && this.password == "OstryKC06") {
        this.$router.push('/create_event')
      } else {
        alert("wrong password");
      }
    }
  }
};
</script>




