<template>
  <div class="container-fluid windows-page">
    <h1 class="text-center">Tất cả các bản Windows</h1>
    <hr />
    <div class="content">
      <div class="row m-2">
        <div class="col-12">
          <h2 class="text-start">Windows 10</h2>
          <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-item">
              <div class="card-item">
                <h5 class="text-center">21H2</h5>

                <div class="d-flex justify-content-around">
                  <a
                    href="https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EX46TZxxTU9GtPV_lkQWI-sBcssTBNbPljMSMvEnQvjSiA?e=RsqVBv"
                    class="btn btn-primary btn-lg"
                    >x32</a
                  >
                  <a href="" class="btn btn-primary btn-lg">x64</a>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-item">
              <div class="card-item">
                <h5 class="text-center">21H1</h5>

                <div class="d-flex justify-content-around">
                  <a href="" class="btn btn-primary btn-lg">x32</a>
                  <a href="" class="btn btn-primary btn-lg">x64</a>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-item">
              <div class="card-item">
                <h5 class="text-center">20H2</h5>

                <div class="d-flex justify-content-around">
                  <a href="" class="btn btn-primary btn-lg">x32</a>
                  <a href="" class="btn btn-primary btn-lg">x64</a>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-item">
              <div class="card-item">
                <h5 class="text-center">20H1</h5>

                <div class="d-flex justify-content-around">
                  <a href="" class="btn btn-primary btn-lg">x32</a>
                  <a href="" class="btn btn-primary btn-lg">x64</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: "Windows" };
</script>

<style scoped lang="scss">
.windows-page {
  .row {
    .col-item {
      .card-item {
        padding: 10px;
        margin: 5px;
        border-radius: 6px;
        box-shadow: 0px 2px 2px 0px rgb(0 0 0 / 14%),
          0px 3px 1px -2px rgb(0 0 0 / 12%), 0px 1px 5px 0px rgb(0 0 0 / 20%);
        a {
          margin: 5px;
        }
      }
    }
  }
}
</style>
