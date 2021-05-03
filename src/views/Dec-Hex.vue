<template>
    <div class="hex">
        <input
            v-model="dec"
            class="form-control"
            placeholder="Dec"
            @keyup="encode()"
        />
        {{ hex }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Dec_Hex",
    data() {
        return {
            dec: "",
            hex: "",
        };
    },
    methods: {
        async encode() {
            if (this.dec === "") {
                this.hex = "Please fill in the Fields"
                return;
            }
            this.hex = Number(this.dec).toString(16);
        },
    },
});
</script>

<style scoped>
    .aes input {
        margin-bottom: 0.7em;
    }
</style>
