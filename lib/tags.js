
exports = module.exports = {};

exports.parse = function(args, defaults, replacements) {
   var options = {};
   if (typeof defaults === "object" && !(defaults instanceof Array)) {
       options = defaults
   }
 
   if (typeof replacements === "object" && !(defaults instanceof Array)) {
        for (var i in args) {
             var arg = args[i];
             if (arg.charAt(0) === "-" && arg.charAt(1) != "-") {
                  arg = arg.substr(1);
                  if (arg.indexOf("=") !== -1) {
                      arg = arg.split("=");
                      var keys = arg.shift();
                      var value = arg.join("=");
 
                      arg = keys.split("");
                      var key = arg.pop();
                      if (replacements.hasOwnProperty(key)) {
                           key = replacements[key];
                      }
 
                      args.push("--" + key + "=" + value);
                  } else {
                      arg = arg.split("");
                  }
 
                  arg.forEach(function(key){
                      if (replacements.hasOwnProperty(key)) {
                          key = replacements[key];
                      }
                      args.push("--" + key);
                  });
             }
        }
   }
   return options;

};