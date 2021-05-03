<template>
    <div class="aes">
        <input
            v-model="password"
            placeholder="Password"
            @keyup="decrypt()"
            class="form-control"
        />
        <input
            v-model="ciphertext"
            placeholder="Ciphertext"
            @keyup="decrypt()"
            class="form-control"
        />
        {{ decrypted_message }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AES from "crypto-js/aes";

function hexToString(hex: string): string {
    let str = "";
    for (let i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

export default defineComponent({
    name: "AES_Decrypt",
    data() {
        return {
            ciphertext: "",
            decrypted_message: "",
            password: "",
        };
    },
    methods: {
        async decrypt() {
            if (this.ciphertext === "" || this.password === "") return;
            this.decrypted_message = hexToString(
                AES.decrypt(this.ciphertext, this.password).toString()
            );
        },
    },
});
</script>

<style scoped>
    .aes input {
        margin-bottom: 0.7em;
    }
</style>
