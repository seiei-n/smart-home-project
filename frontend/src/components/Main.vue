<template>
    <div>
        <h1>smart-home-project</h1>

        <div class="switchbot">
            <button @click="switch_on">Switch on</button>
            <button @click="switch_off">Switch off</button>
            <p>Switch is {{ switch_state }}</p>
        </div>
    </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "axios";
export default {
    name: "Main",
    setup() {
        const state = reactive({
            switch_state: "off",
        });

        const switch_on = () => {
            axios
                .get("http://localhost:5000/switch_on")
                .then((response) => {
                    state.switch_state = response.data.switch_state;
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        const switch_off = () => {
            axios
                .get("http://localhost:5000/switch_off")
                .then((response) => {
                    state.switch_state = response.data.switch_state;
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        onMounted(() => {
            axios
                .get("http://localhost:5000/switch_state")
                .then((response) => {
                    state.switch_state = response.data.switch_state;
                })
                .catch((error) => {
                    console.log(error);
                });
        });

        return {
            switch_state: state.switch_state,
            switch_on,
            switch_off,
        };
    },
};
</script>
