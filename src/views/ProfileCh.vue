<template>
    <v-row  class="hidden-sm-and-up">

        <div style="margin:auto">
          <v-avatar color="grey" rounded="10" size="140" class="mt-10">
      
            <v-img :src="this.image" cover></v-img>
            <v-sheet class="hv" style="right:60px;top:0;position: absolute;opacity: 0.4;"><v-icon
                @click="this.image = ''">mdi-close</v-icon> </v-sheet>
          </v-avatar>
          <v-file-input style="" class="bg-primary  mt-10" v-model="this.image"
            @change="onFileSelected" label="Avatar" type="file" accept="image/*" placeholder="Pick an avatar"
            append-icon="mdi-camera"></v-file-input>
          <v-alert class="mt-10" color="warning"> Choose picture or skip with defualt image </v-alert>
          <v-btn class="mt-10" to="/post">OK</v-btn>
      
        </div>
      
      </v-row>
      <v-dialog style="width:50%" v-model="this.err">
        <v-card>
          <h2 class="mb-10"> Type of file is not supported </h2><v-btn color="red"
            @click="this.err = false">close</v-btn>
        </v-card>
  
      </v-dialog>
      


</template>

<script>
  export default{
    data(){return{
        err:false,
        image:null,
        token: localStorage.getItem("token")
    }},
    methods:{
        onFileSelected: function () {
      {
        const allowedTypes = ['image/jpeg', 'image/png'];
        if (this.image) {
          if (allowedTypes.includes(this.image.type)) {
            const objectURL = URL.createObjectURL(this.image);
            this.image = objectURL;
          } else { this.err = true; this.image = '' }
        }
      }
    },
    }

  }
</script>