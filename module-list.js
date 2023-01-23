(function(){
    var modules={
        "elig1":         {url:"$H/m/elig1.html"},
        "not_elig1":         {url:"$H/m/not_elig1.html"},
        "not_elig2":         {url:"$H/m/not_elig2.html"},
        "not_elig3":         {url:"$H/m/not_elig3.html"},
        "not_elig4":         {url:"$H/m/not_elig4.html"},
        "recruitment-data": {url:"$H/m/elig-questions-data.html",Table:"canrestsa-recruitment-record",form_module:"recruitment-form",router:1},
        "recruitment-form": {url:"$H/m/elig-questions-form.html",Table:"canrestsa-recruitment-record"},
        "recruitment-1-data": {url:"$H/m/elig-1-questions-data.html",Table:"canrestsa-recruitment-record"},
        "recruitment-2-data": {url:"$H/m/elig-2-questions-data.html",Table:"canrestsa-recruitment-record"},
        "recruitment-3-data": {url:"$H/m/elig-3-questions-data.html",Table:"canrestsa-recruitment-record"},
        "recruitment-4-data": {url:"$H/m/elig-4-questions-data.html",Table:"canrestsa-recruitment-record"},
        "recruitment-participate-data": {url:"$H/m/elig-part-questions-data.html",Table:"canrestsa-recruitment-record"},
        "recruitment-elig-data": {url:"$H/m/elig-all-questions-data.html",Table:"canrestsa-recruitment-record",form_module:"recruitment-elig-form",task_name:"Eligible"},
        "recruitment-elig-form": {url:"$H/m/elig-all-questions-form.html",Table:"canrestsa-recruitment-record",task_name:"Eligible"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    }
})();
