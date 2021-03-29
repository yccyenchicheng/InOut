function hover(element, dataset) {
    var methods = ["DRIT", "CycleGAN", "CycleBicycle"]
    for (i=1; i<=3; i++){
        var tag = document.getElementsByName(dataset+"_"+methods[i-1])[0]
        console.log(tag)
        tag.style.color="#224B8D"
        tag.style.fontWeight='normal'
    }
    method = element.id
    element.style.color="#ff0000"
    element.style.fontWeight='bold'
    for (i=1; i<=5; i++){
        for (j=1; j<=4; j++){
            var img = document.getElementsByName(dataset+"_"+i+"_"+j)[0]
            console.log(img)
            console.log(i,j)
            var filename = "images/Demo/" + dataset + "/" + method + "/" + i+ "/"+j+".png"
            img.src = filename
        }
    }
}
