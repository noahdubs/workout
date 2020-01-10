
const event = () => { 
    document.addEventListener("DOMContentLoaded", e =>{
        let styles = {}, i;
        for(i = 0; i < pageNames.length; i++){
            console.log(pageNames[i])
            let current = document.getElementById(pageNames[i])
            if(pageNames[i] === currentPage){
                styles[pageNames[i]] = {backgroundColor: "#000000"}
            } else {           
                current.addEventListener("mouseenter", e => {
                    current.style.backgroundColor = "#CAC8C8"
                });
                current.addEventListener('mouseleave', e => {
                    current.style.backgroundColor = '#fff';
                });
            }
        }
        addedStyles.styles = styles 
    })
}