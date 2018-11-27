<template>
<v-card>
        <v-container
          fluid
          grid-list-lg
          
        >
          <v-layout row wrap>
            <v-flex>
              <v-card color="white" class="pink--text">
                <v-card-title primary-title>
                    <v-layout justify-center>
                        <div class="headline">JADWAL PENYIRAMAN 1</div>
                    </v-layout>
                </v-card-title>   
                <v-layout row mx-3>
                    <div>
                        <v-icon color="pink" size="48" center>alarm</v-icon>
                    </div>
                    <v-layout row mx-1></v-layout>
                    <v-text-field
                        v-model="jam1"
                        type="number"
                        label="Hour"
                        :placeholder = "pot[0].Pump1.hour"
                        solo
                    ></v-text-field>
                    <v-layout row mx-1></v-layout>
                    <v-text-field
                        v-model="menit1"
                        type="number"
                        label="Minute"
                        :placeholder = "pot[0].Pump1.min"
                        solo
                    ></v-text-field>
                </v-layout>  
                <v-layout justify-center>
                    <v-btn color="primary" dark @click="pump1(pot)">simpan
                        <v-icon dark right>check_circle</v-icon>
                    </v-btn>
                </v-layout>
              </v-card>
            </v-flex>

            <v-flex>
              <v-card color="white" class="pink--text">
                <v-card-title primary-title>
                    <v-layout justify-center>
                        <div class="headline">JADWAL PENYIRAMAN 2</div>
                    </v-layout>
                </v-card-title>   
                <v-layout row mx-3>
                    <div>
                        <v-icon color="pink" size="48" center>alarm</v-icon>
                    </div>
                    <v-layout row mx-1></v-layout>
                    <v-text-field
                        v-model="jam1"
                        type="number"
                        label="Hour"
                        :placeholder = "pot[0].Pump2.hour"
                        solo
                    ></v-text-field>
                    <v-layout row mx-1></v-layout>
                    <v-text-field
                        v-model="menit1"
                        type="number"
                        label="Minute"
                        :placeholder = "pot[0].Pump2.min"
                        solo
                    ></v-text-field>
                </v-layout>  
                <v-layout justify-center>
                    <v-btn color="primary" dark @click="pump2(pot)">simpan
                        <v-icon dark right>check_circle</v-icon>
                    </v-btn>
                </v-layout>
              </v-card>
            </v-flex>

            <v-flex xs12>
              <v-card color="white" class="pink--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">ATUR JADWAL NYALA LAMPU UV</div>
                    <br>
                    <br>
                    <v-text-field
                      v-model="jam3"
                      type="number"
                      label="Hour"
                      placeholder="Jam"
                      solo
                    ></v-text-field>
                    <v-text-field
                      v-model="menit3"
                      type="number"
                      label="Minute"
                      placeholder="Menit"
                      solo
                    ></v-text-field>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat color="pink" @click="uvOn(pot)">Atur Jadwal</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>

            <v-flex xs12>
              <v-card color="white" class="pink--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">ATUR JADWAL MATI LAMPU UV</div>
                    <br>
                    <br>
                    <v-text-field
                      v-model="jam4"
                      type="number"
                      label="Hour"
                      placeholder="Jam"
                      solo
                    ></v-text-field>
                    <v-text-field
                      v-model="menit4"
                      type="number"
                      label="Minute"
                      placeholder="Menit"
                      solo
                    ></v-text-field>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat color="pink" @click="uvOff(pot)">Atur Jadwal</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>

            <v-flex xs12>
              <v-card color="white" class="pink--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">ATUR LAMPU RGB</div>
                    <br>
                    <br>
                    <v-select
                    :items="items"
                    label="Pilih Preset Warna"
                    solo
                    ></v-select>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat color="pink">Atur Jadwal</v-btn>
                </v-card-actions>
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
