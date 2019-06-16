<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Aktivitas">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Tanggal">{{ item.country }}</md-table-cell>
        <md-table-cell md-label="Jam">{{ item.city }}</md-table-cell>
        <md-table-cell md-label="Kondisi">{{ item.salary }}&deg;</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      users: [
        {
          name: "Suhu",
          salary: "28",
          country: "28-05-2019",
          city: "14.12"
        },
        {
          name: "Suhu",
          salary: "30",
          country: "28-05-2019",
          city: "14.13"
        },        
        {
          name: "Kelembaban",
          salary: "29",
          country: "28-05-2019",
          city: "14.15"
        },        
        {
          name: "Suhu",
          salary: "29",
          country: "28-05-2019",
          city: "14.19"
        }
      ]
    };
  }
};
</script>
