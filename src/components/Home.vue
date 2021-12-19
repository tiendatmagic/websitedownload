<template>
  <div class="container-fluid home overflow-hidden text-center">
    <h1>Chào mừng bạn đã đến với trang web tải Windows Office của mình</h1>

    <h3 class="mt-5">Hãy lựa chọn thứ bạn muốn tải</h3>

    <button class="btn btn-danger btn-lg">Windows</button
    ><button class="btn btn-warning btn-lg">Office</button
    ><button class="btn btn-success btn-lg">Software</button>
  </div>
</template>

<script>
export default { name: "Trang chủ" };
</script>

<style scoped lang="scss">
.home {
  h1 {
    position: relative;
    color: #f09;
    animation: show linear 1s forwards;
  }
  button {
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
