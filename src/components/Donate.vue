<template>
  <div class="smainn">
    <br />
    <div id="sdonate">
      <div class="donate">
        <div class="item">Donate:</div>
        <div class="item">
          <img
            src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/logo-momo.png"
            alt=""
          />
        </div>
        <div class="item">0901980543</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.donate {
  display: flex;
  flex-wrap: wrap;
  background-color: #ae2170;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 auto;
  padding: 10px;
  margin-bottom: 20px;
  max-width: 300px;
  border-radius: 5px;
}
.donate .item {
  margin: 5px;
}

.donate img {
  width: 60px;
}
</style>
