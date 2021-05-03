<template>
    <div class="base64">
        <input
            v-model="encoded"
            class="form-control"
            placeholder="Message"
            @keyup="decode()"
        />
        {{ decoded }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Base64_Encode",
    data() {
        return {
            encoded: "",
            decoded: "",
        };
    },
    methods: {
        async decode() {
            if (this.encoded === "") {
                this.decoded = "Please fill in the Fields"
                return;
            }
            this.decoded = atob(this.encoded);
        },
    },
});
</script>
