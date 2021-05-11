module.exports = function(content, map, meta) {
    return `module.exports = function(){
        return \`${content}\`;
    };`;
  }