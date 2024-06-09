<template>
    <div>
        <div v-for="item in dataList">
            {{item.id}}
            {{item.bookname}}
            {{item.price}}
        </div>
    </div>
</template>

<script>

import testApi from "../../api/test"

export default {
    data() {
        return {
            dataList:[]
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            testApi.getList().then((res) => {
                this.dataList = res.data
                console.log(this.dataList);
            });
        },
    },
};
</script>