<template>
  <div class="container-fluid software-page">
    <h1 class="text-center">Các phần mềm thông dụng</h1>
    <hr />
    <p class="text-danger text-center fw-bold">
      Lưu ý: Vì lý do bản quyền, nên mình sẽ không chia sẻ các tool crack
      Windows hay Office nhé!
    </p>
    <h4 class="text-center fw-bold">
      Để đảm bảo các phần mềm thuộc phiên bản mới nhất, ở đây mình chỉ chia sẻ
      link các phần mềm hay dùng thôi nhé
    </h4>
    <div class="container">
      <div class="row">
        <div class="card-item" v-for="cards in card" v-bind:key="cards">
          <a :href="cards.link" target="_blank">
            <img :src="cards.img" alt="" />
          </a>
        </div>
        <!-- <div class="card-item">
          <a
            href="https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7B7D150693-EC65-5CBE-0FE0-8DC44632D411%7D%26lang%3Dvi%26browser%3D4%26usagestats%3D1%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3Dx64-stable-statsdef_1%26installdataindex%3Dempty/update2/installers/ChromeSetup.exe"
          >
            <img src="../assets/chrome.png" alt="" />
          </a>
        </div>
        <div class="card-item">
          <a href="https://referrals.brave.com/latest/BraveBrowserSetup.exe">
            <img src="../assets/brave.png" alt="" />
          </a>
        </div>
        <div class="card-item">
          <a
            href="https://cdn.stubdownloader.services.mozilla.com/builds/firefox-stub/vi/win/44a459140c42f697cf08ef52b20cace8254ec8980ab00a4781f386854b881e5c/Firefox%20Installer.exe"
          >
            <img src="../assets/firefox.png" alt="" />
          </a>
        </div>
        <div class="card-item">
          <a
            href="https://net.geo.opera.com/opera/stable/windows?utm_tryagain=yes&utm_source=google-ads_via_opera_com&utm_medium=ba_ose&utm_campaign=%252300%2520-%2520WW%2520-%2520Search%2520-%2520EN%2520-%2520Branded_via_opera_com_https&utm_content=google%20cpc&utm_id=gclidCj0KCQiA8ICOBhDmARIsAEGI6o3F50f4YREP2qi-9jn4CCeH9G0_8nKWX1oIdwpShVoUd_96S1LNBwAaAlEOEALw_wcB&http_referrer=https%3A%2F%2Fwww.google.com%2F&utm_site=opera_com&&utm_lastpage=opera.com/&dl_token=22393230"
          >
            <img src="../assets/opera.png" alt="" />
          </a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Phần mềm",
  data: function () {
    return {
      card: [
        {
          img: "",
          link: "https://c2rsetup.officeapps.live.com/c2r/downloadEdge.aspx?platform=Default&source=EdgeStablePage&Channel=Stable&language=vi",
          name: "Microsoft edge",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.software-page {
  .row {
    .card-item {
      padding: 0px;
      margin: 10px;
      border-radius: 6px;
      box-shadow: 0px 2px 2px 0px rgb(0 0 0 / 14%),
        0px 3px 1px -2px rgb(0 0 0 / 12%), 0px 1px 5px 0px rgb(0 0 0 / 20%);
      width: 100px;
      height: 100px;
      max-width: 100px;
      max-height: 100px;
      cursor: pointer;

      a {
        width: 100%;
        height: 100%;
      }

      img {
        width: 100%;
        height: 100%;
        padding: 10px;
      }
    }
  }
}
</style>
