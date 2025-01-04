// LOOPS FORM ORDER
var form = document.getElementById("loops-form-order");
var loopsFormBtn = document.getElementById("loops-form-submit");
var submiting = false;

loopsFormBtn.addEventListener("click", function (event) {
  console.log("clicking");

  if (submiting) {
    setTimeout(function () {
      event.target.disabled = true;
    }, 0);
  }
});

form.addEventListener("submit", function (e) {
  console.log("submiting");
  if (!submiting) {
  }

  submiting = true;
});

// REDIRECT WA
function loopsFetchFbclid(linkId) {
    console.log("ok");
    try {
      const LoopsUrl = new URL(window.location.href);
      const loopsFBClid = LoopsUrl.searchParams.get("fbclid");
      var loopsWaLink = document.getElementById(linkId).action;
      const separator = loopsWaLink.includes("?") ? "&" : "?";

      if (loopsFBClid) {
        console.log(loopsWaLink);
        console.log(loopsFBClid);
        loopsWaLink = `${loopsWaLink}${separator}${"fbclid"}=${loopsFBClid}`;
        document.getElementById(linkId).setAttribute("action", loopsWaLink);
      }

      console.log(loopsWaLink);
    } catch (error) {
      console.log(error);
    }
  }

  loopsFetchFbclid("loops-form-order");