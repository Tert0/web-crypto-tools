<template>
    <div class="base64">
        <input
            v-model="message"
            class="form-control"
            placeholder="Message"
            @keyup="encode()"
        />
        {{ encoded }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Base64_Encode",
    data() {
        return {
            message: "",
            encoded: "",
        };
    },
    methods: {
        async encode() {
            if (this.message === "") {
                this.encoded = "Please fill in the Fields"
                return;
            }
            this.encoded = btoa(this.message);
        },
    },
});
</script>

<style scoped>
    .aes input {
        margin-bottom: 0.7em;
    }
</style>
