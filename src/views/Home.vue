<template>
  <div class="form-designer-container">
    <form-desinger>
    </form-desinger>
  </div>
</template>
<script>
import formDesinger from "@/components/form-designer/Form-designer"
export default {
  name: "formDesignerDemo",
  components: {
    formDesinger
  }
}
</script>
<style lang="scss" scoped>
.form-designer-container {
  width: 100%;
  height: 100%;
}
</style>
