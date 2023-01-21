start = words

words = vs: (word / anychar)* {
    return vs.filter(function(v) {
        return v;
    });
}

word = $ [ԱԲԳԴԵԶԷԸԹԺԻԼԽԾԿՀՁՂՃՄՅՆՇՈՉՊՋՌՍՎՏՐՑՒՓՔՕՖՈաբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքօֆոև]+

anychar = . {
   return null;
}
