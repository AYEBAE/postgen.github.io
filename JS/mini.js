var images="img/tumblr_m1ahq8CFB41qm3wzuo1_500.gif img/tumblr_m6n145H4451qbbkmco1_500.jpg img/tumblr_m6xxl0JJlo1qbbkmco1_500.jpg img/tumblr_m7buruUls91rzi94yo1_500.jpg img/tumblr_m7m9fsfsf31rnjc8eo1_500.png img/tumblr_ma1ncnWTKH1rvq3t9o1_500.jpg img/tumblr_mauibiGYDR1qaa5poo1_500.jpg img/tumblr_mb4zh0lAsl1rrj10do1_500.gif img/tumblr_mbtnsvghkU1rrj10do1_500.gif img/tumblr_mcg8miQdRT1r81wceo1_500.jpg img/tumblr_mcg8o4z9JO1r81wceo1_500.jpg img/tumblr_mcg8pqvarL1r81wceo1_500.jpg img/tumblr_mcgpoywtvm1rzi94yo1_500.jpg img/tumblr_mcgq8cjE041r81wceo1_500.jpg img/tumblr_mcgq24lhv61r81wceo1_500.jpg img/tumblr_mcl5qaJq771r81wceo1_500.jpg img/tumblr_mcl5rm3x2n1r81wceo1_500.jpg img/tumblr_mcti3oMWR31r81wceo1_500.jpg img/tumblr_mdvgryAdju1r81wceo1_500.jpg img/tumblr_mebz0zU0lo1recwlxo1_500.jpg img/tumblr_meujn5lII71rp8v27o1_500.gif img/tumblr_mg56q80Y8l1qcn9pjo1_r3_500.jpg img/tumblr_miv5ndxeoq1rrj10do1_500.gif img/tumblr_mjkyalSYC91qkjjfoo1_500.gif img/tumblr_mkfyozL0eF1qkjjfoo1_500.gif img/tumblr_mnam84GRVp1qbew9ro1_500.jpg img/tumblr_mqp4sya0za1suv9xao1_r1_500.jpg img/tumblr_mvjfxi8IDD1sk1k58o1_500.jpg".split(" ");
init();function random_image(a){for(var b=randomize(a);a[b]===document.getElementById("blogImgs").src;)b=randomize(a);document.getElementById("blogImgs").src=a[b].toString()}function randomize(a){return Math.floor(Math.random()*a.length)}function init(){document.getElementById("blogImgs").addEventListener("onClick",function(){random_image(images)});random_image(images)}document.getElementById("myBtn").onclick=function(){myFunction()};
function myFunction(){document.getElementById("myDropdown").classList.toggle("show")}var colorArray=["mediumpurple","white"],i=0;function chBackcolor(){x=document.getElementById("js-button");x.style.color=colorArray[i++];i==colorArray.length&&(i=0)};
