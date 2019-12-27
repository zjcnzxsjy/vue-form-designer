<template>
  <div class="form-designer-container">
    <form-desinger :remote-method="remoteMethod">
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
  methods: {
    remoteMethod(args) {
      return new Promise((resolve, reject) => {
        this.$http.get(args.url).then(res => {
          resolve(res.data.result_data)
        })
      })
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
