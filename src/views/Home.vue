<template>
  <div class="form-designer-container">
    <form-desinger
      :data="data"
      @get-remote-dataSource="handleGetRemoteDataSource">
    </form-desinger>
  </div>
</template>
<script>
import formDesinger from "@/components/form-designer/Form-designer"
export default {
  name: "formDesignerDemo",
  components: {
    formDesinger
  },
  data() {
    return {
      data: {}
    }
  },
  methods: {
    handleGetRemoteDataSource(data, apiDataSource, transferKey) {
      
      data.children = [
        {
          "label": "a",
          "value": "a"
        },
        {
          "label": "b",
          "value": "b"
        },
        {
          "label": "c",
          "value": "c"
        }
      ];
      console.log(data)
    }
  }
}
</script>
<style lang="scss" scoped>
.form-designer-container {
  width: 100%;
  height: 100%;
}
</style>
