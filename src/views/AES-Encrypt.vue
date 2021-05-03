<template>
    <div class="aes">
        <input
            v-model="password"
            placeholder="Password"
            class="form-control"
            @keyup="encrypt()"
        />
        <input
            v-model="message"
            class="form-control"
            placeholder="Message"
            @keyup="encrypt()"
        />
        {{ encrypted_message }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AES from "crypto-js/aes";

export default defineComponent({
    name: "AES_Encrypt",
    data() {
        return {
            message: "",
            password: "",
            encrypted_message: "",
        };
    },
    methods: {
        async encrypt() {
            if (this.message === "" || this.password === "") {
                this.encrypted_message = "Please fill in the Fields"
                return;
            }
            this.encrypted_message = AES.encrypt(
                this.message,
                this.password
            ).toString();
        },
    },
});
</script>

<style scoped>
    .aes input {
        margin-bottom: 0.7em;
    }
</style>
