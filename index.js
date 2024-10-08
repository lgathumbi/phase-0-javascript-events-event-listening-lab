function addingEventListener() {
    const button = document.getElementById("button");
    console.log(button);
    if(button) {
        button.addEventListener("click", () => {
            alert("Btton was clicked!");
        })
    }else{
        console.error("Button not found!");
    }    
} 


