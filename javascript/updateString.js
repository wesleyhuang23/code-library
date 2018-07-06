function stringUpdate(){
  var links = document.getElementsByTagName('a');
  var check = new RegExp(/blog-entries/); //string to look for
  for(var i = 0; i < links.length; i++){
    var url = links[i].href;
    var res = check.test(url)
    if(res){
      links[i].href = url.replace(/blog-entries/, "blog"); //string to be replaced with
    }
  }
}
