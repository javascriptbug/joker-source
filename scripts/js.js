function duan(){
    console.log("asdf");
}

hexo.extend.generator.register('duan',function(locals) {
  duan();
})