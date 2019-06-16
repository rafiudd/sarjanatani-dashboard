<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Profile</h4>
        <p class="category">Complete your profile</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout" >
          <div class="md-layout-item md-small-size-100 md-size-100" >
            <md-field v-for="(users, index) in users" :key="index">
              <label>{{users.id}}</label>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100" >
            <md-field v-for="(users, index) in users" :key="index">
              <label>{{users.name}}</label>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field v-for="(users, index) in users" :key="index">
              <label>{{users.email}}</label>            
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field  v-for="(users, index) in users" :key="index">
              <label>{{users.no_hp}}</label>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Luas Lahan</label>
              <md-input v-model="address" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Jenis Tanaman</label>
              <md-input v-model="city" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Mulai Tanam</label>
              <md-input v-model="country" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-center">
            <!-- <md-button class="md-raised md-success">Update Profile</md-button> -->
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
const axios = require('axios');
export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      loading: false,
      users: [],
      username: null,
      disabled: null,
      emailadress: null,
      lastname: null,
      firstname: null,
      address: null,
      city: null,
      country: null,
      code: null,
      aboutme:
        "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
    };
  },
  mounted() {
    this.getData()
  },
  methods : {
        getData() {
            let token = window.localStorage.getItem('token');
            console.log(token)
            axios.get("http://localhost:8000/api/user?token=" + token, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' 
            }
        }).then(response => {
                this.loading = false;
                this.users = response.data;
                console.log(this.users);
            })
            .catch(err => {
                console.log(err);
                alert(err, 'Error :(', '')
                console.log(token)
            })
        }
    }
};
</script>
<style></style>
