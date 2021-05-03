<template>
    <div class="hex">
        <input
            v-model="hex"
            class="form-control"
            placeholder="Hex"
            @keyup="encode()"
        />
        {{ dec }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Hex_Dec",
    data() {
        return {
            dec: "",
            hex: "",
        };
    },
    methods: {
        async encode() {
            if (this.hex === "") {
                this.dec = "Please fill in the Fields"
                return;
            }
            this.dec = String(parseInt(this.hex, 16));
        },
    },
});
</script>

<style scoped>
    .aes input {
        margin-bottom: 0.7em;
    }
</style>
