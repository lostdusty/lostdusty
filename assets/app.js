const tabs = ['tab-info', 'tab-main', 'tab-exit'];
const proxyTabs = new Proxy(tabs, {
  get(target, prop) {
    if (!isNaN(prop)) {
      prop = parseInt(prop, 10);
      if (prop < 0) {
        prop += target.length;
      }
    }
    return target[prop];
  }
});
var currentTab = "";

/**
 * @param {element} elem - Short function for document.getElementById.
 */
function eid(elem) {
  return document.getElementById(elem);
}

/**
 * @param {element} elem - Short function for document.getElementsByClassName.
 */
function ecn(elem) {
  return document.getElementsByClassName(elem);
}


function setTab(evt, tabName) {
  var i, tabcontent, tablinks;
  currentTab = tabName;

  // hide all class="tabcontent".
  tabcontent = ecn("main-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // get all elements with class="tablinks" and remove the class "active"
  tablinks = ecn("tab-title");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // show the current tab, and add an "active" class to the button that opened the tab
  eid(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  var removeTabString = tabName.substring(4, tabName.length);
  eid(removeTabString).classList.add("active");
}

function start() {
  setTab(event, "tab-info");
  eid("info").classList.add("active");
}

function exit() {
  //Try with all possible ways to close the current tab. if not possible will redirect back, or even, return to the last page. if still not possible, throw 404.
  window.close();
  window.top.close();
  window.open(location, '_self').close();
  history.back();
  window.location.replace("/404");
}

document.onkeydown = function (e) {
  e = e || window.event;
  var curTab = tabs.indexOf(currentTab);
  if (e.key == "ArrowRight") {
    if (proxyTabs[curTab + 1] === undefined) {
      setTab(event, proxyTabs[0]);
      return;
    }
    setTab(event, proxyTabs[curTab + 1]);
  }
  if (e.key == "ArrowLeft") {
    if (proxyTabs[curTab - 1] === undefined) {
      setTab(event, proxyTabs[-1]);
      return;
    }
    setTab(event, proxyTabs[curTab - 1]);
  }

  if (e.key == "Enter" && curTab == 2) {
    exit();
  }
};

window.addEventListener('DOMContentLoaded', function () {
  start();
})

