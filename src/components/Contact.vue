<template>
  <div class="container-fluid contact-page">
    <h1 class="text-center">Thông tin liên hệ</h1>
    <div class="content text-center">
      <h3>
        Email:
        <a href="mailto:tiendatmagic8@gmail.com" target="_blank"
          ><strong>tiendatmagic8@gmail.com</strong></a
        >
      </h3>
      <h3>
        Facebook:
        <a href="https://www.facebook.com/tiendatmagic/" target="_blank"
          >facebook.com/tiendatmagic
        </a>
      </h3>

      <h3>Nếu muốn, bạn có thể donate:</h3>
      <Donate />
    </div>
  </div>
</template>

<script>
import Donate from "./Donate.vue";
export default {
  components: { Donate },
  name: "Liên hệ",
  compoents: Donate,
};
</script>

<style scoped lang="scss"></style>
