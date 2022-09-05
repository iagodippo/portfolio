window.onscroll = function() {scrollFunction()};

// função para o scroll
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("navbar").style.top = "-50px";
    document.getElementById("myBtn").style.display = "none";
  }
}
// função para voltar ao topo
function topFunction() {
    document.documentElement.scrollTop = 0;
}