<template>
    <v-app class="pa-16 pb-0">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-avatar style="padding: 25px;" size="200">
                        <v-img src="../assets/logo.png"></v-img>
                    </v-avatar>
                    <div style="display: block !important;">
                        <v-btn variant="text"> <v-icon color="primary"> mdi-message </v-icon>
                            <v-tooltip activator="parent"> Chat with him </v-tooltip>
                        </v-btn>
                        <v-btn variant="text"> <v-icon color="primary"> mdi-post-outline </v-icon>
                            <v-tooltip activator="parent"> view all posts </v-tooltip>
                        </v-btn>
                    </div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-card class="px-3 py-1">
                        <p class="text-button text-primary"> Name </p>
                        <p> {{ `Ahmad omar` }} </p>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="3" >
                    <v-card class="px-3 py-1">
                    <p class="text-button text-primary"> From </p>
                    <p> {{ `syria/Damascus` }} </p>
                </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="3"><v-card class="px-3 py-1">
                    <p class="text-button text-primary"> Gender </p>
                    <p> {{ `Male` }} </p></v-card>
                </v-col>
                <v-col cols="12" md="9"><v-card class="px-3 py-1">
                    <p class="text-button text-primary"> Bio </p>
                    <p> {{ `none` }} </p></v-card>
                </v-col>
                <v-col cols="12" md="9">
                    <v-card class="px-3 py-1">
                    <p class="text-button text-primary"> Birthday </p>
                    <p> {{ `2005/12/4` }} </p></v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script setup>
</script>

<style scoped></style>