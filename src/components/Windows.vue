<template>
  <div class="container-fluid windows-page">
    <h1 class="text-center">Tất cả các bản Windows</h1>
    <hr />
    <div class="content">
      <div class="row m-2">
        <div class="col-12">
          <h3 class="text-start">Windows 11</h3>
          <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-item">
              <div class="card-item">
                <h5 class="text-center fw-bold">21H2</h5>

                <div class="d-flex justify-content-around">
                  <a
                    :href="windows.windows11.x64"
                    class="btn btn-primary btn-lg"
                    target="_blank"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Windows 11 x64"
                    >x64</a
                  >
                </div>
                <p class="text-center text-danger mb-0 fw-bold">
                  Lưu ý: Windows 11 chỉ có bản 64bit (chưa bypass)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row m-2">
        <div class="col-12">
          <h3 class="text-start">Windows 10</h3>
          <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-item">
              <div class="card-item">
                <h5 class="text-center fw-bold">21H2</h5>

                <div class="d-flex justify-content-around">
                  <a
                    :href="windows.windows10.v21h2.x32"
                    class="btn btn-primary btn-lg"
                    target="_blank"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Windows 10 x32"
                    >x32</a
                  >
                  <a
                    :href="windows.windows10.v21h2.x64"
                    class="btn btn-primary btn-lg"
                    target="_blank"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Windows 10 x64"
                    >x64</a
                  >
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-item">
              <div class="card-item">
                <h5 class="text-center fw-bold">21H1</h5>

                <div class="d-flex justify-content-around">
                  <a
                    :href="windows.windows10.v21h1.x32"
                    class="btn btn-primary btn-lg"
                    target="_blank"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Windows 10 21H1 x32"
                    >x32</a
                  >
                  <a
                    :href="windows.windows10.v21h1.x64"
                    class="btn btn-primary btn-lg"
                    target="_blank"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Windows 10 21H1 x64"
                    >x64</a
                  >
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-item">
              <div class="card-item">
                <h5 class="text-center fw-bold">20H2</h5>

                <div class="d-flex justify-content-around">
                  <a
                    :href="windows.windows10.v20h2.x32"
                    class="btn btn-primary btn-lg"
                    target="_blank"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Windows 10 20H2 x32"
                    >x32</a
                  >
                  <a
                    :href="windows.windows10.v20h2.x64"
                    class="btn btn-primary btn-lg"
                    target="_blank"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Windows 10 20H2 x64"
                    >x64</a
                  >
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-item">
              <div class="card-item">
                <h5 class="text-center fw-bold">20H1</h5>

                <div class="d-flex justify-content-around">
                  <a
                    :href="windows.windows10.v20h1.x32"
                    class="btn btn-primary btn-lg"
                    target="_blank"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Windows 10 20H1 x32"
                    >x32</a
                  >
                  <a
                    :href="windows.windows10.v20h1.x64"
                    class="btn btn-primary btn-lg"
                    target="_blank"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Windows 10 20H1 x64"
                    >x64</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row m-2">
        <div class="col-12">
          <h3 class="text-start">
            Windows 10 LTSC - Phiên bản Windows 10 rút gọn
          </h3>
          <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-item">
              <div class="card-item">
                <h5 class="text-center fw-bold">LTSB 2016</h5>

                <div class="d-flex justify-content-around">
                  <a
                    :href="windows.windows10ltsc.windows2016ltsb.x32"
                    class="btn btn-primary btn-lg"
                    target="_blank"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Windows 10 LTSC 2016 x32"
                    >x32</a
                  >
                  <a
                    :href="windows.windows10ltsc.windows2016ltsb.x64"
                    class="btn btn-primary btn-lg"
                    target="_blank"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Windows 10 LTSC 2016 x64"
                    >x64</a
                  >
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-item">
              <div class="card-item">
                <h5 class="text-center fw-bold">LTSC 2019</h5>

                <div class="d-flex justify-content-around">
                  <a
                    :href="windows.windows10ltsc.windows2019ltsc.x32"
                    class="btn btn-primary btn-lg"
                    target="_blank"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Windows 10 LTSC 2019 x32"
                    >x32</a
                  >
                  <a
                    :href="windows.windows10ltsc.windows2019ltsc.x64"
                    class="btn btn-primary btn-lg"
                    target="_blank"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Windows 10 LTSC 2019 x64"
                    >x64</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row m-2">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-item">
          <h3 class="text-start">Windows XP</h3>
          <div class="card-item">
            <div class="d-flex justify-content-around">
              <a
                :href="windows.windowsxp.x32"
                class="btn btn-primary btn-lg"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Windows XP x32"
                >x32</a
              >
              <a
                :href="windows.windowsxp.x64"
                class="btn btn-primary btn-lg"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Windows XP x64"
                >x64</a
              >
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-item">
          <h3 class="text-start">Windows Vista</h3>
          <div class="card-item">
            <div class="d-flex justify-content-around">
              <a
                :href="windows.windowsvista.x32"
                class="btn btn-primary btn-lg"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Windows Vista x32"
                >x32</a
              >
              <a
                :href="windows.windowsvista.x64"
                class="btn btn-primary btn-lg"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Windows Vista x64"
                >x64</a
              >
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-item">
          <h3 class="text-start">Windows 7</h3>
          <div class="card-item">
            <div class="d-flex justify-content-around">
              <a
                :href="windows.windows7.x32"
                class="btn btn-primary btn-lg"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Windows 7 x32"
                >x32</a
              >
              <a
                :href="windows.windows7.x64"
                class="btn btn-primary btn-lg"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Windows 7 x64"
                >x64</a
              >
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-item">
          <h3 class="text-start">Windows 8</h3>
          <div class="card-item">
            <div class="d-flex justify-content-around">
              <a
                :href="windows.windows8.x32"
                class="btn btn-primary btn-lg"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Windows 8 x32"
                >x32</a
              >
              <a
                :href="windows.windows8.x64"
                class="btn btn-primary btn-lg"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Windows 8 x64"
                >x64</a
              >
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-item">
          <h3 class="text-start">Windows 8.1</h3>
          <div class="card-item">
            <div class="d-flex justify-content-around">
              <a
                :href="windows.windows8_1.x32"
                class="btn btn-primary btn-lg"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Windows 8.1 x32"
                >x32</a
              >
              <a
                :href="windows.windows8_1.x64"
                class="btn btn-primary btn-lg"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Windows 8.1 x64"
                >x64</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="row m-2">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-item">
          <h3 class="text-start">Windows Server 2012</h3>
          <div class="card-item">
            <div class="d-flex justify-content-around">
              <a
                :href="windows.windowsserver2012.x64"
                class="btn btn-primary btn-lg"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Windows Server 2012 x64"
                >x64
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-item">
          <h3 class="text-start">Windows Server 2016</h3>
          <div class="card-item">
            <div class="d-flex justify-content-around">
              <a
                :href="windows.windowsserver2016.x64"
                class="btn btn-primary btn-lg"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Windows Server 2016 x64"
                >x64</a
              >
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-item">
          <h3 class="text-start">Windows Server 2019</h3>
          <div class="card-item">
            <div class="d-flex justify-content-around">
              <a
                :href="windows.windowsserver2019.x64"
                class="btn btn-primary btn-lg"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Windows Server 2019 x64"
                >x64</a
              >
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-item">
          <h3 class="text-start">Windows Server 2022</h3>
          <div class="card-item">
            <div class="d-flex justify-content-around">
              <a
                :href="windows.windowsserver2022.x64"
                class="btn btn-primary btn-lg"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Windows Server 2022 x64"
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
export default {
  name: "Windows",
  data: function () {
    return {
      windows: {
        windows11: {
          x64: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EXd3-vmNrl9BuPPdGiFM_c4B2mX8U6rOY_n6QuHuOmPt9Q?e=5MgtrN",
        },
        windows10: {
          v21h2: {
            x32: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EX46TZxxTU9GtPV_lkQWI-sBcssTBNbPljMSMvEnQvjSiA?e=RsqVBv",
            x64: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/Ec-5cmQre_lLm3P3vPPuaH4B4nlAKhM2wPX1NWjO5WjZaw?e=lc7QgL",
          },
          v21h1: {
            x32: "",
            x64: "",
          },
          v20h2: {
            x32: "",
            x64: "",
          },
          v20h1: {
            x32: "",
            x64: "",
          },
        },
        windows10ltsc: {
          windows2016ltsb: {
            x32: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EX46TZxxTU9GtPV_lkQWI-sBcssTBNbPljMSMvEnQvjSiA?e=RsqVBv",
            x64: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/Ec-5cmQre_lLm3P3vPPuaH4B4nlAKhM2wPX1NWjO5WjZaw?e=lc7QgL",
          },
          windows2019ltsc: {
            x32: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/ETAz6faBTSlLt5QehMbBVswBamywPnyY-bmS2e2lO_h-2w?e=s8baCh",
            x64: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EbmmAar_zb5Dq4elqOoIgR4BXWIqqx8HS-50GAbyx5zZVg?e=dmcnTY",
          },
        },
        windowsxp: {
          x32: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EQYB_WKOMm1Eq4dDhqZceXkBf6-kxhb2R8baAIpAiMz2XA?e=8GuPUw",
          x64: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EYz3b0pZqqhKlwyIKLhkjpgBI90A0ppNolTse-p0z6iqZA?e=KjhDPa",
        },
        windowsvista: {
          x32: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EeNmRRMpxqhCh6AhU523fi0BIwgZb0Zyq6gG7xcVY1X4zQ?e=PI8gIl",
          x64: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EVjoFnpSsxlHuTsjn4D5l3UBxuwCo1jq3bCWnU2uPBAiyg?e=z4atQT",
        },
        windows7: {
          x32: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/Ebo-0B6lDllFj-XCiU9-IuoBCgB79Av_qRyzx7DKte0LHw?e=7GbPMo",
          x64: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EalcTyybvL5GlhunCwVw004BoH75pZEQXT4sC1qXgWz-sw?e=gwaRru",
        },
        windows8: {
          x32: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EVPptBwK4qNIgjn5uLY2dxMBgdZSWARz2zI5KKtBSnt1Rg?e=nqsMuX",
          x64: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EVPptBwK4qNIgjn5uLY2dxMBgdZSWARz2zI5KKtBSnt1Rg?e=xrMvWs",
        },
        windows8_1: {
          x32: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EeXoitkA_MpBmLlMBUd8f3sBr8mir5aHHP0vh_n7M2qbpQ?e=lAcrXv",
          x64: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EXjp5zjore5Au4HwfTqhROoB8jzciTAh7te-oV6-Rz63Nw?e=7o262h",
        },
        windowsserver2012: {
          x64: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/Ef1AV-A7S4dPvYcckCbJjA0BQEKaZcD5L5_4NUlZQWWlzw?e=ymn3Ad",
        },
        windowsserver2016: {
          x64: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EXQTmro9NJhAtHVABNtmP5kBIUi0rVTMcN3C7dweYrwW2g?e=Nj4ahL",
        },
        windowsserver2019: {
          x64: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/ESJNpvJ3D7NPn5z8vVcKyREBnNPHnCSX3qI9bpPP8_ylqQ?e=7myY5A",
        },
        windowsserver2022: {
          x64: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/ERJ4_d9gDwVEhQztnIFT-VkBduKjpBxM1Gt9EcGPu3uWPw?e=ugZUoa",
        },
      },
    };
  },

};
</script>

<style scoped lang="scss">
.windows-page {
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
