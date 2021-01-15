

function myhttp(){

    this.http=new XMLHttpRequest();
}
myhttp.prototype.get = function(url,callback){
    this.http.open('GET',url,true);
    this.http.onload=function(){
        if(this.status===200){
        callback(null,this.responseText);
        }
        else{
            callback('this is error',this.status)
        }
    }
    this.http.send();
}
myhttp.prototype.post = function (url, data, callback) {
    this.http.open('POST', url, true)
    this.http.setRequestHeader('Content-type', 'application/json')
    this.http.onload = function () {

        callback(null, this.responseText)

    }
    this.http.send(JSON.stringify(data))
}
myhttp.prototype.put = function(url,data,callback){
   this.http.open('PUT',url,true);
    this.http.setRequestHeader('Content-type', 'application/json');
    this.http.onload=function(){
               if(this.status===200){
             callback(null,this.responseText);
        }else{
             callback('this is error',this.status)
        }
    }
    this.http.send(JSON.stringify(data));
}
myhttp.prototype.delete = function(url,callback){
     this.http.open('DELETE',url,true);
    this.http.setRequestHeader('Content-type', 'application/json');
    this.http.onload=function(){
        if(this.status===200){
            callback(null,this.responseText);
        }else{
            callback('this is error',this.status)
        }     
    }
   this.http.send();
}