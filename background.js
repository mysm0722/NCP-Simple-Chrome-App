// var waiting = false;

// function login(){ // Call this function to start
//     var frame = document.getElementsByTagName('iframe')[0];
//     frame.src = "https://www.ncloud.com";
//     waiting = true;
// }

// function callback(){ // This gets called once the page loads
//     console.log("Done!");
// }

// chrome.extension.onMessage.addListener(function(request, sender, sendResponse){
//     if(request.loaded && waiting){
//         // If you used a pattern, do extra checks here:
//         // if(request.loaded == "https://website.com/index.php")
//         document.getElementsByTagName('iframe')[0].src = "about:blank";
//         waiting = false;
//         callback();
//     }
// });

chrome.webRequest.onHeadersReceived.addListener(
    function (details) {
      return {
        responseHeaders: details.responseHeaders.filter(function(header) {
          return (header.name.toLowerCase() !== 'x-frame-options');
        })
      };
    }, {
      urls: ["<all_urls>"]
    }, ["blocking", "responseHeaders"]);