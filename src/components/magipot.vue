<template>
<v-card>
        <v-container
          fluid
          grid-list-lg

        >
          <v-flex>
            <v-layout justify-center>
              <img src="../assets/pot.png" height="300">
            </v-layout>
          </v-flex>

          <v-layout row wrap>
            <v-flex xs12>
              <v-card color="primary" class="white--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">INFORMASI TANAMAN</div>
                    <span>Nama : Pohon Sawi</span>
                    <br>
                    <span>Tinggi : 500 Km</span>
                    <br>
                    <span>Lokasi : Tamanan, Bantul</span>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>

            <v-flex xs12>
              <v-card color="white" class="pink--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">STATUS TANAMAN</div>
                    <span>Kelembapan : {{ pot[0].humidity }} ( max : 1024 )</span>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>

            <v-flex xs12>
              <v-card color="white" class="pink--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">STATUS TANAMAN</div>
                    <span>Kelembapan : {{ pot[0].humidity }} ( max : 1024 )</span>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
</v-card>
</template>
<script>
import potRef from './../config';
  export default {
    name: 'Magipot',
      firebase: {
        pot: potRef
      },
    data(){
      return {
        humidity: '',
        jam1: '',
        jam2: '',
        jam3: '',
        jam4: '',
        menit1: '',
        menit2: '',
        menit3: '',
        menit4: '',
        newJam: '',
        newMenit: '',
        items: ['Merah', 'Hijau', 'Biru', 'Kuning', 'Ungu', 'Putih']
      }
    },
    methods: {
      pump1: function(pot1) {
        var newJam = parseInt(this.jam1);
        var newMenit = parseInt(this.menit1);
        potRef.child('pot1').child('Pump1').child('hour').set(newJam);
        potRef.child('pot1').child('Pump1').child('min').set(newMenit);
        this.jam1 = '';
        this.menit1 = '';
      },
      pump2: function(pot1) {
        var newJam = parseInt(this.jam2);
        var newMenit = parseInt(this.menit2);
        potRef.child('pot1').child('Pump2').child('hour').set(newJam);
        potRef.child('pot1').child('Pump2').child('min').set(newMenit);
        this.jam2 = '';
        this.menit2 = '';
      },
      uvOn: function(pot1) {
        var newJam = parseInt(this.jam3);
        var newMenit = parseInt(this.menit3);
        potRef.child('pot1').child('LampON').child('hour').set(newJam);
        potRef.child('pot1').child('LampON').child('min').set(newMenit);
        this.jam3 = '';
        this.menit3 = '';
      },
      uvOff: function(pot1) {
        var newJam = parseInt(this.jam4);
        var newMenit = parseInt(this.menit4);
        potRef.child('pot1').child('LampOFF').child('hour').set(newJam);
        potRef.child('pot1').child('LampOFF').child('min').set(newMenit);
        this.jam4 = '';
        this.menit4 = '';
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
