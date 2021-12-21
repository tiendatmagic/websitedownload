<template>
  <div class="container-fluid software-page">
    <h1 class="text-center">Các phần mềm thông dụng</h1>
    <hr />
    <p class="text-danger text-center fw-bold">
      Lưu ý: Mình sẽ không chia sẻ các tool crack Windows hay Office nhé!
    </p>
    <h4 class="text-center fw-bold">
      Để đảm bảo các phần mềm thuộc phiên bản mới nhất, ở đây mình chỉ chia sẻ
      link các phần mềm hay dùng thôi nhé
    </h4>
    <div class="container">
      <div class="row">
        <div class="card-item" v-for="cards in card" v-bind:key="cards">
          <a :href="cards.link" target="_blank">
            <img :src="require(`../assets/${cards.image}`)" alt="" />
          </a>
        </div>
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
          image: "msedge.png",
          link: "https://www.microsoft.com/vi-vn/edge",
          name: "Microsoft edge",
        },
        {
          image: "chrome.png",
          link: "https://www.google.com/intl/vi_vn/chrome/",
          name: "Google Chrome",
        },
        {
          image: "coccoc.png",
          link: "https://coccoc.com/",
          name: "Cốc Cốc",
        },
        {
          image: "brave.png",
          link: "https://brave.com/download/",
          name: "Brave",
        },
        {
          image: "firefox.png",
          link: "https://www.mozilla.org/vi/firefox/new/",
          name: "Firefox",
        },
        {
          image: "opera.png",
          link: "https://www.opera.com/vi",
          name: "Opera",
        },
        {
          image: "unikey.png",
          link: "https://www.unikey.org/download.html",
          name: "Unikey",
        },
        {
          image: "winrar.png",
          link: "https://www.win-rar.com/start.html?&L=0",
          name: "Winrar",
        },
        {
          image: "idm.png",
          link: "https://www.internetdownloadmanager.com/",
          name: "IDM",
        },
        {
          image: "msteam.png",
          link: "https://www.microsoft.com/vi-vn/microsoft-teams/download-app",
          name: "Microsoft Team",
        },
        {
          image: "teamview.png",
          link: "https://www.teamviewer.com/vi/",
          name: "Teamviewer",
        },
        {
          image: "bluestack.png",
          link: "https://www.bluestacks.com/download.html",
          name: "Bluestack",
        },
        {
          image: "nox.png",
          link: "https://vn.bignox.com/",
          name: "Nox Player",
        },
        {
          image: "ldplayer.png",
          link: "https://vn.ldplayer.net/",
          name: "LD Player",
        },
        {
          image: "zoom.png",
          link: "https://zoom.us/download",
          name: "Zoom",
        },
        {
          image: "cpuz.png",
          link: "https://www.cpuid.com/softwares/cpu-z.html",
          name: "CPU-Z",
        },
        {
          image: "ultraiso.png",
          link: "https://www.ultraiso.com/",
          name: "Ultraiso",
        },
        {
          image: "drivereasy.png",
          link: "https://www.drivereasy.com/",
          name: "Drivereasy",
        },
        {
          image: "easybcd.png",
          link: "https://v90.x8top.net/tmp082020/cf/soft/2021/1/ba/4/easybcd_240237.exe",
          name: "Easy BCD",
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
