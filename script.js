async function speedtest (){
    let button = document.getElementById("testbutton");
    button.disabled = true;
    button.style.backgroundColor = '#ced8f0';
    let response = await fetch("demo.txt");
    const contentlength = response.headers.get("Content-Length");
    const reader = response.body.getReader();
    let downloaded = 0;
    let start = new Date();
    let time = 0;
    let speed = 0;
    let needle = document.querySelector(".mask");
    let speed_container = document.querySelector(".speed");
    let rotate = 0;

    
    while (contentlength > downloaded) {
        let {done, value} = await reader.read();
        downloaded += value.length;
        let current = new Date();
        time = (current - start)/1000;
        
        speed = ((downloaded/time)/1000000)*8;
        speed = speed.toFixed(2);


        speed_container.innerHTML = speed;

        if (speed > 100) 
            rotate = 150;

        else 
            rotate = ((speed/100)*270)+225;

        needle.style.transform = 'rotate('+rotate+'deg)';
        
    }

    needle.style.transform = 'rotate('+225+'deg)';
    
    button.disabled = false;
    button.style.backgroundColor = '#1A73E8';
    
    

}

