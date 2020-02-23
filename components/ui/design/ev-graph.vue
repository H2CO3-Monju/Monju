<template>
  <div class="graphwrap">
    <v-row>
      <v-col class="pa-0" xl="3" lg="3" md="3" sm="12" xs="12">
        <small class="stars">
          ★★★★★
        </small>
      </v-col>
      <v-col class="pa-0" xl="8" lg="8" md="8" sm="12" xs="12">
        <v-progress-linear
          class="graph mt-3"
          value="20"
          color="#9CD929"
          background-color="#D5D5D5"
        ></v-progress-linear>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="pa-0" xl="3" lg="3" md="3" sm="12" xs="12">
        <small class="stars">
          ★★★★
        </small>
      </v-col>
      <v-col class="pa-0" xl="8" lg="8" md="8" sm="12" xs="12">
        <v-progress-linear
          class="graph mt-3"
          value="40"
          color="#C4D929"
          background-color="#D5D5D5"
        ></v-progress-linear>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="pa-0" xl="3" lg="3" md="3" sm="12" xs="12">
        <small class="stars">
          ★★★
        </small>
      </v-col>
      <v-col class="pa-0" xl="8" lg="8" md="8" sm="12" xs="12">
        <v-progress-linear
          class="graph mt-3"
          value="50"
          color="#F0E222"
          background-color="#D5D5D5"
        ></v-progress-linear>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="pa-0" xl="3" lg="3" md="3" sm="12" xs="12">
        <small class="stars">
          ★★
        </small>
      </v-col>
      <v-col class="pa-0" xl="8" lg="8" md="8" sm="12" xs="12">
        <v-progress-linear
          class="graph mt-3"
          value="60"
          color="#F4A230"
          background-color="#D5D5D5"
        ></v-progress-linear>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="pa-0" xl="3" lg="3" md="3" sm="12" xs="12">
        <small class="stars">
          ★
        </small>
      </v-col>
      <v-col class="pa-0" xl="8" lg="8" md="8" sm="12" xs="12">
        <v-progress-linear
          class="graph mt-3"
          value="70"
          color="#F34573"
          background-color="#D5D5D5"
        ></v-progress-linear>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.graphwrap {
  margin: 0;
  padding: 0;
  .stars {
    font-size: 3px;
    color: #707070;
  }
}
</style>
