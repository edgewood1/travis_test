var fs = require("fs");

fs.readdir("./", function(err, items) {
  console.log(items);
});

fs.readFile("./README.md", "utf8", function(err, contents) {
  console.log(contents);
  // add a <p> tag before / after contents
  //   create a new html File
  //   add these contents to it
  //   render it on the Browser or send to react component
});

// move through contents
// if "---" then begin reading as an object
// if second --- then read as content
// if *** then readgit  as <span
