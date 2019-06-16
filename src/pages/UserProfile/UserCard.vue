<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content v-for="(users, index) in users" :key="index">
      <h6 class="category text-gray">{{users.name}}</h6>
      <h4 class="card-title">{{users.name}}</h4>
    </md-card-content>
  </md-card>
</template>
<script>
const axios = require('axios');
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/marc.jpg")
    }
  },
  data() {
    return {
      users : []
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
                console.log(token)
            })
        }
    }
};
</script>
<style></style>
