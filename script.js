function myFunction() {
  if (document.getElementById('a').checked) {
    document.getElementById("fight").style.display= 'block';
    document.getElementById("comeback").style.display= 'none';
    document.getElementById("run").style.display= 'none';

  }else if (document.getElementById('b').checked) {
    document.getElementById("comeback").style.display= 'block';
    document.getElementById("fight").style.display= 'none';
    document.getElementById("run").style.display= 'none';
  }else if (document.getElementById('c').checked) {
    document.getElementById("run").style.display= 'block';
    document.getElementById("fight").style.display= 'none';
    document.getElementById("comeback").style.display= 'none';
  }

}
