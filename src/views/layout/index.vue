<template>
    <div>
        <app-heder></app-heder>
        <app-navbar></app-navbar>
        <app-main></app-main>
    </div>
</template>

<script>
import AppHeder from "@/components/AppHeader/index.vue";
import AppMain from "@/components/AppMain/index.vue";
import AppNavbar from "@/components/AppNavbar/index.vue";

export default {
    components: {
        AppHeder,
        AppMain,
        AppNavbar,
    },
    data() {
        return {};
    },
    methods: {},
};
</script>

<style>

</style>
