<template>
  <div class="container-fluid software-page">
    <h1 class="text-center">Các phần mềm thông dụng</h1>
    <hr />
    <p class="text-danger text-center fw-bold">
      Lưu ý: Mình sẽ không chia sẻ các tool crack Windows hay Office nhé!
    </p>

    <div class="container">
      <h4 class="text-left fw-bold">
        Để đảm bảo các phần mềm thuộc phiên bản mới nhất, ở đây mình chỉ chia sẻ
        link các phần mềm hay dùng thôi nhé
      </h4>
      <div class="row">
        <div class="card-item" v-for="sws in sw" v-bind:key="sws">
          <a :href="sws.link" target="_blank">
            <img :src="require(`../assets/${sws.image}`)" alt="" />
          </a>
        </div>
      </div>
    </div>
    <hr />

    <div class="container">
      <h4 class="text-left fw-bold">
        Phần mềm Adobe 2021 Password: phanmemnet.com
      </h4>
      <div class="row">
        <div class="card-item" v-for="adobes in adobe" v-bind:key="adobes">
          <a :href="adobes.link" target="_blank" :title="adobes.name">
            <img :src="require(`../assets/adobe/${adobes.image}`)" alt="" />
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
      sw: [
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
      adobe: [
        {
          image: "adobe-photoshop.png",
          link: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/ERlr9ZG1fJVAvjl_6Drjx0sBMEmf_I3A3DOuuLk3K8Ng5Q?e=K2h8tA",
          name: "Adobe Photoshop",
        },
        {
          image: "Adobe_Photoshop_Lightroom_Classic_CC_icon.png",
          link: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EfXSyvPEylhOkDkmWdlhZVwBU7eH4XcQtgmetEFxHgglFQ?e=9Gl4iK",
          name: "Adobe Photoshop Lightroom",
        },
        {
          image: "Adobe_Animate.png",
          link: "",
          name: "Adobe Animate",
        },
        {
          image: "Adobe_InDesign_CC_icon.png",
          link: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EeRk_J0WnLlEqtkEWlZogpQB0x4LdjRZPT3RN8qtUMzahA?e=1P5Yvd",
          name: "Adobe InDesign",
        },
        {
          image: "Adobe_Media_Encoder_Icon.png",
          link: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EcIvwOfLJf5FgR4T2XlkyW4BtMU4_fRGbj0gx0P2dKcNhw?e=PWKB5J",
          name: "Adobe Media Encode",
        },
        {
          image: "Adobe_Premiere_Pro_CC_icon.png",
          link: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EaM3QppeiSpInCia56MYdYsBQemnJ0voqpNJuLNEI_w-LA?e=8fjRHu",
          name: "Adobe Premiere",
        },
        {
          image: "Adobe_XD_CC_icon.png",
          link: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EYFVihMlVCpMv_b-pmxTerYBAvXQNNNXyVwySGLMzfO4jg?e=m6ipOd",
          name: "Adobe XD",
        },
        {
          image: "adobe-illustrator-logo.png",
          link: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EUGfoXOXFYhCupXt8J5-Yi8BHNcT0kORKgyqWp6X0a1MZw?e=RAmAdH",
          name: "Adobe Illustrator",
        },
        {
          image: "Adobe_InCopy_CC_icon.png",
          link: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EbXgU63zUrRPqUtnKrEn9uQB3ig9vHTRgSh2pc-ylldCpg?e=vbR5Nk",
          name: "Adobe InCopy",
        },
        {
          image: "Adobe_After_Effects_CC_icon.png",
          link: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/ERzHjEsFXmVEnqfSqnH5-PwBy5JV0CDdGoWHB-WU6NxZ_w?e=9LgcEc",
          name: "Adobe After Effects",
        },
        {
          image: "adobe_audition.png",
          link: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/Eah39D6tPMhBu4FbIDgak64Bt3SngDehqSeXdDzYRZDLQQ?e=2GA42b",
          name: "Adobe Audition",
        },
        {
          image: "corel.png",
          link: "https://tiendatmagic-my.sharepoint.com/:u:/g/personal/tiendatmagic_tiendatmagic_onmicrosoft_com/EY0yTQGtBu1BsZB5s8l25HsBBMjImvL7lnX0AdY8OPXeNg?e=f1FAaK",
          name: "CorelDRAW",
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
