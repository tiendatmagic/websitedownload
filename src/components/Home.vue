<template>
  <div class="container-fluid home-page overflow-hidden">
    <h1 class="text-center">
      Chào mừng bạn đã đến với trang web tải Windows Office của mình
    </h1>
    <div class="content text-center">
      <h3 class="mt-5">Hãy lựa chọn thứ bạn muốn tải</h3>
      <router-link to="/windows" class="text-white btn btn-warning btn-lg"
        >Windows
      </router-link>

      <router-link to="/office" class="text-white btn btn-success btn-lg"
        >Office
      </router-link>

      <router-link to="/software" class="text-white btn btn-primary btn-lg"
        >Phần mềm
      </router-link>
    </div>
  </div>
</template>

<script>
export default { name: "Trang chủ" };
</script>

<style scoped lang="scss">
.home-page {
  h1 {
    position: relative;
    color: #f09;
    animation: show linear 0.7s forwards;
  }
  a.btn {
    margin: 10px;
  }
  @keyframes show {
    from {
      right: -50%;
    }
    to {
      right: 0px;
    }
  }
}
</style>
