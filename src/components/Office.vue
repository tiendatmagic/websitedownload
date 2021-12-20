<template>
  <div class="container-fluid office-page">
    <h1 class="text-center">Tất cả các bản Office</h1>
    <hr />
    <div class="content">
      <div class="row m-2">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-item">
          <h3 class="text-start">Office 365</h3>
          <div class="card-item">
            <div class="d-flex justify-content-around">
              <a
                :href="office.office365.x64"
                class="btn btn-primary btn-lg"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Office 365 x64"
                >x64</a
              >
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-item">
          <h3 class="text-start">Office 2013</h3>
          <div class="card-item">
            <div class="d-flex justify-content-around">
              <a
                :href="office.office2013.x32"
                class="btn btn-primary btn-lg"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Office 2013 x32"
                >x32</a
              >
              <a
                :href="office.office2013.x64"
                class="btn btn-primary btn-lg"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Office 2013 x64"
                >x64</a
              >
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-item">
          <h3 class="text-start">Office 2016</h3>
          <div class="card-item">
            <div class="d-flex justify-content-around">
              <a
                :href="office.office2016.x32"
                class="btn btn-primary btn-lg"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Office 2016 x32"
                >x32</a
              >
              <a
                :href="office.office2016.x64"
                class="btn btn-primary btn-lg"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Office 2016 x64"
                >x64</a
              >
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-item">
          <h3 class="text-start">Office 2019</h3>
          <div class="card-item">
            <div class="d-flex justify-content-around">
              <a
                :href="office.office2019.x32"
                class="btn btn-primary btn-lg"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Office 2019 x32"
                >x32</a
              >
              <a
                :href="office.office2019.x64"
                class="btn btn-primary btn-lg"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Office 2019 x64"
                >x64</a
              >
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-item">
          <h3 class="text-start">Office 2021</h3>
          <div class="card-item">
            <div class="d-flex justify-content-around">
              <a
                :href="office.office2021.x64"
                class="btn btn-primary btn-lg"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Office 2021 x64"
                >x64</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/js/bootstrap.min.js";
import { Tooltip } from "bootstrap/dist/js/bootstrap.esm.min.js";
export default {
  name: "Office",
  data: function () {
    return {
      office: {
        office2013: {
          x32: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EeathF2RabNHoQYB80tyDfEBJFW08U5f_5ZAFrZb1WE83A?e=uuGxMd",
          x64: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EUPp7zqXyEtMibsvNnhZuBQBpQqIoKprv_TKn3JmBnmOlA?e=hVm8O4",
        },
        office2016: {
          x32: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EZqFI7UlQrBCiapGhZcAUOcBd3q_GbWeBrc0Q35eoEB6UQ?e=qIfUCU",
          x64: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EXd3ju1E86NNo214CaEjQVwBY58lBCPN5pxIZtcDVwO2kg?e=VcgsOh",
        },
        office2019: {
          x32: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EYR3v5_626pJn19HR0L3SnMByuYBBW-CJgnrNWihhF5PnQ?e=G2s8eg",
          x64: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EfA4D67mRR1Nsu770yOacBcB9ZkvXKoLIN7fVTjbRkTkIw?e=U0ke8R",
        },
        office2021: {
          x64: "",
        },
        office365: {
          x64: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EU0z_c7t83VBp3cmxgsp120B_PePu4gIT60eQSlSLp4UBA?e=7RfoCA",
        },
      },
    };
  },
  mounted() {
    Array.from(
      document.querySelectorAll('a[data-bs-toggle="tooltip"]')
    ).forEach((tooltipNode) => new Tooltip(tooltipNode));
  },
};
</script>

<style scoped lang="scss">
.office-page {
  .row {
    .col-item {
      h3 {
        margin: 0;
      }
      .card-item {
        padding: 10px;
        margin: 10px 5px;
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
