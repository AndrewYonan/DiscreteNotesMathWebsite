window.MathJax = {
    loader: {load: ['[tex]/color']},
    tex: {packages: {'[+]': ['color']}}
};
MathJax.Hub.Config({
    tex2jax: {
      inlineMath: [ ['$','$'], ["\\(","\\)"] ],
      processEscapes: true
    }
  });