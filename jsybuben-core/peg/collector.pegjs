start = words

words = vs: (word / anychar)* {
    return vs.filter(function(v) {
        return v.length > 0;
    });
}

word = $ [ԱԲԳԴԵԶԷԸԹԺԻԼԽԾԿՀՁՂՃՄՅՆՇՈՉՊՋՌՍՎՏՐՑՒՓՔՕՖՈաբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքօֆոև]+

anychar = . {
   return "";
}
