
function time() {
    let d = new Date(); 
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();
    let ms = d.getMilliseconds();
    let string = d.toLocaleDateString('en-uk', { dateStyle: 'full'});
    let date = string.substring(0, string.length - 4)    
    console.log(date)    
}
time()

